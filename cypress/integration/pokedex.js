/* eslint-disable no-undef */
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:8080')
    // cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon page can be navigated to', function() {
    // In home page
    cy.contains('ivysaur')
    cy.get('a[href="/pokemon/ivysaur"]').click()
    cy.contains('chlorophyll')
  })
  it('can exit pokemon page and go to another pokemon', function() {
    // in ivysaur page
    cy.contains('venusaur').should('not.exist')
    cy.get('a[href="/"]').click()
    cy.contains('raticate')
    cy.get('a[href="/pokemon/raticate"]').click()
    cy.contains('hustle')
  })
})
