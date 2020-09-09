describe('User can see interface with series', () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://content.viaplay.se/pc-se/serier/samtliga",
      response: "fixture:series_index.json"
    })
    cy.visit("/")
  });

  it('user should see logo', () => {
    cy.get('#nav_logo_img').should('exist')
  });

  it('User can see a list of the series', () => {
    cy.get('.series_container').within(() => {
      cy.get('.series__img').should('exist')
    })
  }); 

  it('User can see footer', () => {
    cy.get('.footer').shoud('exist')
  });
});