/// <reference types="Cypress" />

describe('Clicking on the section title at the top takes you to the right module', () => {
  beforeEach(() => {
    cy.visit('https://testdummy.komi.io/#b6703040-7153-4c43-b098-8c97ef10d31b');
  })

  //checks each element sepparately to make it easier to debug
  it('Checks for Single Music link', () => {
    cy.get('.talent-detail-tab').contains('Single Music').click();
    cy.get('.my-swiper__title').should('contain','Single Music');
  })
  it('Checks for Music Tracks link', () => {
    cy.get('.talent-detail-tab').contains('Music Tracks').click();
    cy.get('.my-swiper__title').should('contain','Music Tracks');
  })
  it('Checks for Pre-Save Music link', () => {
    cy.get('.talent-detail-tab').contains('Pre-Save Music').click();
    cy.get('.my-swiper__title').should('contain','Pre-Save Music');
  })
  it('Checks for Subscribe link', () => {
    cy.get('.talent-detail-tab').contains('Subscribe').click();
    cy.get('.my-swiper__title').should('contain','Subscribe');
  })
  it('Checks for Latest Singles link', () => {
    cy.get('.talent-detail-tab').contains('Latest Singles').click();
    cy.get('.my-swiper__title').should('contain','Latest Singles');
  })  
  it('Checks for New Video link', () => {
    cy.get('.talent-detail-tab').contains('New Video').click();
    cy.get('.my-swiper__title').should('contain','New Video');
  })
})