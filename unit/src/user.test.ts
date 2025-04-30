import { describe, it, expect } from "vitest";
import { User } from "./User";

// canBorrwo

describe("user.canBorrow", () => {
  it("should allow standard user, no loans", () => {
    const user = new User("1", "Guillaume", "guillaume@test.fr", "standard");
    expect(user.canBorrow()).toBe(true);
  });

  it("should not allow standard user, 3 loans", () => {
    const user = new User("2", "Guillaume", "guillaume@test.fr", "standard");
    user.currentLoans = ["book1", "book2", "book3"];
    expect(user.canBorrow()).toBe(false);
  });

  it("should allow premium user 4 loans", () => {
    const user = new User("3", "Guillaume", "guillaume@test.fr", "premium");
    user.currentLoans = ["book1", "book2", "book3", "book4"];
    expect(user.canBorrow()).toBe(true);
  });

  it("should not allow employee 8 loans", () => {
    const user = new User("4", "Guillaume", "guillaume@test.fr", "employee");
    user.currentLoans = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8"];
    expect(user.canBorrow()).toBe(false);
  });
});

// addLoan

describe("user.addLoan", () => {
  it("should add loan if not borrowed", () => {
    const user = new User("1", "Guillaume", "guillaume@test.fr", "standard");
    user.addLoan("book1");
    expect(user.currentLoans).toContain("book1");
  });
});

// removeLoan

describe("user.removeLoan", () => {
  it("should remove loan if found", () => {
    const user = new User("1", "Guillaume", "guillaume@test.fr", "standard");
    user.addLoan("book1");
    user.removeLoan("book1");
    expect(user.currentLoans).not.toContain("book1");
  });
});
