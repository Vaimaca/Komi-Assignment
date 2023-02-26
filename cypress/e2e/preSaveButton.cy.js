describe('User clicks on “Pre-Save” button and validates the button changes to “Pre-saved”', () => {
    it('Goes to Spotify to save and returns', () => {
        cy.visit('https://testdummy.komi.io/#b6703040-7153-4c43-b098-8c97ef10d31b');
        cy.get('.text--semibold14').should('contain', 'Pre-save');
        cy.get('.music-item--single').click();
        //To perform actions on an external site
        cy.origin('https://accounts.spotify.com', () => {
            cy.get('#login-username').type('31x3iqusljyvkcdktiawl5bbkea4');
            cy.get('#login-password').type('KomiTesting');
            cy.get('.ButtonInner-sc-14ud5tc-0').click();
            cy.wait(2000)
            cy.get('.ButtonInner-sc-14ud5tc-0').click();
        });
        //Returns to the Komi site
        cy.get('.ant-tag').should('contain','PRE-SAVED');
        cy.get('.ant-modal-close-x').click();
        cy.get('.text--semibold14').should('contain', 'Pre-saved');
      })
})