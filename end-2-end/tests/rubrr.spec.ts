import { test, expect } from "@playwright/test";

test("Navigate to Backend section", async ({ page }) => {
  await page.goto("https://rubrr.s3-main.oktopod.app/");
  await page.getByRole("link", { name: "Backend" }).click();
});

test("Navigate to Conception BDD section", async ({ page }) => {
  await page.goto("https://rubrr.s3-main.oktopod.app/");
  await page.getByRole("link", { name: "Backend" }).click();
  await page.getByRole("link", { name: "Conception BDD" }).click();
});

test("Navigate to Design Pattern section", async ({ page }) => {
  await page.goto("https://rubrr.s3-main.oktopod.app/");
  await page.getByRole("link", { name: "Backend" }).click();
  await page.getByRole("link", { name: "Conception BDD" }).click();
  await page.getByRole("link", { name: "Design Pattern" }).click();
  await expect(page).toHaveURL(/\/\?tag=Design%20Pattern/);
});

test("Navigate to Liste des questions", async ({ page }) => {
  await page.goto("https://rubrr.s3-main.oktopod.app/");
  await page.getByRole("link", { name: "Backend" }).click();
  await page.getByRole("link", { name: "Conception BDD" }).click();
  await page.getByRole("link", { name: "Design Pattern" }).click();
  await page.getByRole("link", { name: "Liste des questions" }).click();
  await expect(page).toHaveURL(/\/questions/);
});

test("Search for VPS in Liste des questions", async ({ page }) => {
  await page.goto("https://rubrr.s3-main.oktopod.app/");
  await page.getByRole("link", { name: "Backend" }).click();
  await page.getByRole("link", { name: "Conception BDD" }).click();
  await page.getByRole("link", { name: "Design Pattern" }).click();
  await page.getByRole("link", { name: "Liste des questions" }).click();
  await page.getByRole("textbox").click();
  await page.getByRole("textbox").fill("VPS");
  await page.getByRole("button", { name: "Rechercher" }).click();
});

test("Open a question and navigate back", async ({ page }) => {
  await page.goto("https://rubrr.s3-main.oktopod.app/");
  await page.getByRole("link", { name: "Backend" }).click();
  await page.getByRole("link", { name: "Conception BDD" }).click();
  await page.getByRole("link", { name: "Design Pattern" }).click();
  await page.getByRole("link", { name: "Liste des questions" }).click();
  await page.getByRole("textbox").click();
  await page.getByRole("textbox").fill("VPS");
  await page.getByRole("button", { name: "Rechercher" }).click();
  await page
    .getByRole("row", { name: "Quelles sont les bonnes" })
    .getByRole("link")
    .click();
  await page.getByRole("link", { name: "Retour" }).click();
  await page.getByRole("link", { name: "Retour" }).click();
});
