/// <reference types="Cypress" />

describe('User clicks on the side navigation arrow on the "Music Tracks" module and validates the paging and data', () => {
    beforeEach(() => {
        cy.visit('https://testdummy.komi.io/#b6703040-7153-4c43-b098-8c97ef10d31b');
    })

    //Checks the slider each way sepparetly
    it('Navigates to the Right', () => {
        cy.get('.shadow-left').should('not.exist');
        cy.get('.ant-btn-sm:nth-child(2)').click();
        cy.get('.shadow-left').should('exist');
        cy.get('.ant-btn-sm:nth-child(2)').click();
        cy.get('.shadow-left').should('exist');
        cy.get('.shadow-right').should('not.exist');
    })
    it('Navigates to the Left', () => {
        cy.get('.ant-btn-sm:nth-child(2)').click();
        cy.get('.ant-btn-sm:nth-child(2)').click();
        cy.get('.ant-btn-sm:nth-child(1)').click();
        cy.get('.shadow-right').should('exist');
        cy.get('.ant-btn-sm:nth-child(1)').click();
        cy.get('.shadow-left').should('not.exist');
    })
})