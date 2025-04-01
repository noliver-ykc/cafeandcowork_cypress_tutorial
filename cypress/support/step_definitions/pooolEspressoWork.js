/// <reference types="cypress"/>

import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then ("ユーザはpoool -Espresso&Work-の住所が確認できる", () => {
  //遷移確認
  cy.contains("poool -Espresso&Work-").should("be.visible")

  cy.contains("Address").should("be.visible");
  cy.contains("〒060-0002 Hokkaido, Sapporo, Chuo Ward, Kita 2 Jonishi, 3 Chome−1−1-29 タケサトビル 1F").should("be.visible");
});
