/// <reference types="cypress"/>

import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then ("ユーザはFRAGMENTS COFFEE STANDのWIFI状況確認できる", () => {
  //遷移確認
  cy.contains("FRAGMENTS COFFEE STAND").should("be.visible")

  cy.contains("💻 WiFi").should("be.visible");
  cy.contains("5 ★(240 Mb/s)").should("be.visible");
});
