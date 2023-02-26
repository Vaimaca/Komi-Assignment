/// <reference types= "Cypress"/>

describe('User clicks on a Youtube video and asserts that it redirects successfully', () => {
    it('Checks if static image disapears when playing', () => {
        cy.visit('https://testdummy.komi.io/#b6703040-7153-4c43-b098-8c97ef10d31b');
        cy.get('.youtube-player__overlay > .p--0').click();
        cy.get('.youtube-player__overlay > .p--0').should('not.exist');
        cy.get('.youtube-player__overlay > img').should('not.exist');
    })

    // I was unable to use asserts in the Youtube iframe
})