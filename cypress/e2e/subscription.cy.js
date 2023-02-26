/// <reference types= "Cypress"/>
describe('User clicks on a “Subscription” module and fills the form successfully.', () => {
    it('Goes to the form and fills in all details', () => {
        cy.visit('https://testdummy.komi.io/#b6703040-7153-4c43-b098-8c97ef10d31b');
        cy.get('.text').contains('Sign up for my newsletter').click();
        cy.get('input[placeholder="Please fill this out"').type('Claudio');
        cy.get('#EMAIL_ADDRESS').type('test@test.com');
        cy.get('button[type="submit"]').click();
        cy.on('window:alert',(str) => {expect(str).to.equal('The form was submitted successfully. Thank you!')})
    })
})