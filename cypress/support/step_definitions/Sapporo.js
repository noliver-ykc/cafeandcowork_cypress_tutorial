/// <reference types="cypress"/>

import { Then } from "@badeball/cypress-cucumber-preprocessor";

// even though its an and, we have to write then
Then ("Sapporo画面で「poool -Espresso&Work-」を選択する", () => {
  //遷移確認
  cy.contains("Work-Friendly Places in Sapporo").should("be.visible");

  cy.contains("poool -Espresso&Work-").should("be.visible").click();
});

Then ("Sapporo画面で「FRAGMENTS COFFEE STAND」を選択する", () => {
  //遷移確認
  cy.contains("Work Friendly Places in Sapporo").should("be.visible");

  cy.contains("FRAGMENTS COFFEE STAND").should("be.visible").click();
});
