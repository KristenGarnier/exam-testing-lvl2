import { describe, it, expect, beforeEach } from "vitest";
import { DataStore } from "../src/DataStore";
import { CustomerService } from "../src/CustomerService";
import { ProductService } from "./ProductService";
import { OrderService } from "./OrderService";
import { InvoiceService } from "../src/InvoiceService";
import { ICustomer, IProduct, PaymentMethod } from "../src/types";

describe("Restaurant system integration", () => {
  let dataStore: DataStore;
  let customerService: CustomerService;
  let productService: ProductService;
  let orderService: OrderService;
  let invoiceService: InvoiceService;
  let customer: ICustomer;
  let product1: IProduct, product2: IProduct;

  beforeEach(() => {
    dataStore = new DataStore();
    customerService = new CustomerService(dataStore);
    productService = new ProductService(dataStore);
    orderService = new OrderService(dataStore, productService, customerService);
    invoiceService = new InvoiceService(dataStore, orderService);

    // Creating a customer
    customer = customerService.createCustomer({
      name: "Alice",
      email: "alice@example.com",
      address: "123 Wonderland Ave",
      phone: "123-456-7890",
    });

    // Creating products
    product1 = productService.createProduct({
      name: "Pizza Margherita",
      price: 12.5,
      description: "Classic Italian pizza with tomato, mozzarella, and basil",
      preparationTimeMinutes: 15,
      category: "main",
      available: true,
    });

    product2 = productService.createProduct({
      name: "Cola",
      description: "Refreshing cola drink",
      preparationTimeMinutes: 0,
      category: "drink",
      price: 2.5,
      available: true,
    });
  });

  it("should create a customer", () => {
    expect(customer).toHaveProperty("id");
    expect(customer.name).toBe("Alice");
    expect(customer.loyaltyPoints).toBe(0);

    const fetched = customerService.getCustomer(customer.id);
    expect(fetched).toEqual(customer);
  });

  it("should create multiple products", () => {
    expect(product1).toHaveProperty("id");
    expect(product1.name).toBe("Pizza Margherita");
    expect(product1.price).toBe(12.5);
    expect(product1.category).toBe("main");

    expect(product2).toHaveProperty("id");
    expect(product2.name).toBe("Cola");
    expect(product2.price).toBe(2.5);
    expect(product2.category).toBe("drink");
  });

  it("should create an order", () => {
    const orderItems = [
      { productId: product1.id, quantity: 2 },
      { productId: product2.id, quantity: 3 },
    ];

    // Create order
    const order = orderService.createOrder(customer.id, orderItems);

    // Check the order object
    expect(order).toHaveProperty("id");
    expect(order).toHaveProperty("status", "pending");
    expect(order).toHaveProperty("customerId", customer.id);
    expect(order.totalAmount).toBeCloseTo(12.5 * 2 + 2.5 * 3, 2);
    expect(order.items.length).toBe(2);
    expect(order.estimatedDeliveryTime).toBeInstanceOf(Date);

    // Check that the customer's loyalty points are updated correctly
    const updatedCustomer = customerService.getCustomer(customer.id);
    expect(updatedCustomer?.loyaltyPoints).toBe(
      Math.floor(order.totalAmount / 10)
    );
  });

  it("should generate an invoice for an order", () => {
    const orderItems = [
      { productId: product1.id, quantity: 2 },
      { productId: product2.id, quantity: 3 },
    ];

    // Create order
    const order = orderService.createOrder(customer.id, orderItems);

    // Generate invoice for the order
    const invoice = invoiceService.createInvoice(order.id);

    // Check the invoice
    expect(invoice).toHaveProperty("id");
    expect(invoice).toHaveProperty("orderId", order.id);
    expect(invoice.totalAmount).toBeCloseTo(order.totalAmount, 2);
    expect(invoice.tax).toBeCloseTo(order.totalAmount * 0.1, 2);
    expect(invoice.paid).toBe(false);
    expect(invoice.items.length).toBe(orderItems.length);

    // Ensure that the same invoice is returned when queried by orderId
    const fetchedInvoice = invoiceService.getOrderInvoice(order.id);
    expect(fetchedInvoice).toEqual(invoice);
  });

  it("should mark an invoice as paid", () => {
    const orderItems = [
      { productId: product1.id, quantity: 2 },
      { productId: product2.id, quantity: 3 },
    ];

    // Create order
    const order = orderService.createOrder(customer.id, orderItems);

    // Generate invoice for the order
    const invoice = invoiceService.createInvoice(order.id);

    // Pay the invoice
    const paymentMethod: PaymentMethod = "credit_card";
    const paymentResult = invoiceService.payInvoice(invoice.id, paymentMethod);

    // Check the payment status
    const paidInvoice = invoiceService.getInvoice(invoice.id);

    expect(paymentResult).toBe(true);
    expect(paidInvoice?.paid).toBe(true);
    expect(paidInvoice?.paymentMethod).toBe(paymentMethod);
    expect(paidInvoice?.paidAt).toBeInstanceOf(Date);
  });

  it("should not generate an invoice twice for the same order", () => {
    const orderItems = [
      { productId: product1.id, quantity: 2 },
      { productId: product2.id, quantity: 3 },
    ];

    // Create order
    const order = orderService.createOrder(customer.id, orderItems);

    const firstInvoice = invoiceService.createInvoice(order.id);
    expect(firstInvoice).toHaveProperty("id");

    const secondInvoice = invoiceService.createInvoice(order.id);
    expect(secondInvoice).toEqual(firstInvoice);
  });
});
