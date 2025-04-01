/// <reference types="cypress"/>

import { Given, When } from "@badeball/cypress-cucumber-preprocessor";


Given("ユーザはTOP画面に遷移する", () => {
  // decides screen size
  cy.viewport('iphone-6')
  // tells test to open local host
  cy.visit('http://localhost:3000');
});

When ("TOP画面で「Sapporo」を選択する", () => {
  // looks for recently added, then the closest html select, then selects sapporo
  cy.contains('Recently Added')
  .closest('select')
  // this will eventually fail--- why?
  .select('Sapporo (2)');
})
