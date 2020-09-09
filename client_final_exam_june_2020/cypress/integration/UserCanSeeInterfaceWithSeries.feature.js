describe('User can see interface with series', () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://content.viaplay.se/pc-se/serier/samtliga",
      response: "fixture:movie_index.json"
    })
    cy.visit("/")
  });

  it('user should see logo', () => {
    cy.get('#id').should('exist')
  });
  
});