import { Before, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.viewport("macbook-16");
});


Given('que estou na tela inicial do Google', () => {
    cy.visit('')
})

When('eu pesquiso por "Cypress"', () => {
    cy.get('[name="q"]').type('Cypress')
})

When('pressiono o botão "Pesquisa Google"', () => {
    cy.get('[name="btnK"]').first().click()
})

Then('eu verei os resultados da pesquisa', () => {
    cy.get('[class="dURPMd"]').should('be.visible')
})