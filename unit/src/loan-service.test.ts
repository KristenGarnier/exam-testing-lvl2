import { describe, it, expect, beforeEach } from "vitest";
import { LoanService } from "./LoanService";
import { Book } from "./Book";

describe("LoanService", () => {
  let loanService: LoanService;

  beforeEach(() => {
    loanService = new LoanService();
    const mockBook = {
      id: "book1",
      status: "available",
      isAvailable() {
        return this.status === "available";
      },
      isBorrowed() {
        return this.status === "borrowed";
      },
    };

    const mockUser = {
      id: "user1",
      name: "Test User",
      email: "testuser@example.com",
      category: "standard" as "standard" | "premium" | "employee",
      loans: [],
      currentLoans: [],
      canBorrow: () => true,
      addLoan: () => {},
      removeLoan: () => {},
    };

    loanService.addBook(mockBook as Book);
    loanService.addUser(mockUser);
  });

  it("should allow borrowing a book if available", () => {
    expect(loanService.borrowBook("book1", "user1")).toBe(true);

    const book = loanService["books"].get("book1");
    expect(book?.status).toBe("borrowed");
  });

  it("should not allow borrowing an unavailable book", () => {
    const book = loanService["books"].get("book1");
    if (book) {
      book.status = "borrowed";
    }

    expect(loanService.borrowBook("book1", "user1")).toBe(false);
  });

  it("should allow returning a borrowed book", () => {
    const currentDate = new Date();
    loanService.borrowBook("book1", "user1", currentDate);

    expect(loanService.returnBook("book1", currentDate)).toBe(0);

    const book = loanService["books"].get("book1");
    expect(book?.status).toBe("available");
  });

  it("should return -1 for a book not borrowed", () => {
    expect(loanService.returnBook("book1")).toBe(-1);
  });
});
