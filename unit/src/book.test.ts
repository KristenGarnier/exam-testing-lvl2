import { describe, it, expect } from "vitest";
import { Book } from "./Book";

describe("book", () => {
  it("should return true if the book is borrowed", () => {
    const book = new Book("1", "1984", "George Orwell");
    book.status = "borrowed";
    expect(book.isBorrowed()).toBe(true);
  });

  it("should return true if the book is available", () => {
    const book = new Book("2", "Gaston lagaffe", "Gaston?");
    book.status = "available";
    expect(book.isAvailable()).toBe(true);
  });

  it("should return true if the book is in maintenance", () => {
    const book = new Book("3", "Tintin", "Le mec qui a écrit tintin");
    book.status = "maintenance";
    expect(book.isInMaintenance()).toBe(true);
  });
});
