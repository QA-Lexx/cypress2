// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// From file: example.json
// {
//   "name": "Using fixtures to represent data",
//   "email": "hello@cypress.io",
//   "body": "Fixtures are a great way to mock data for responses to routes"
// }

describe('movie tickets', () => {

  it('check main page', () => {
    cy.visit('http://qamid.tmweb.ru/client/index.php')
  })

  it('check admin page happy path', () => {
    cy.visit('http://qamid.tmweb.ru/admin/')
    const happyAdmin = require('../fixtures/happyPath.json')
    happyAdmin.forEach((happyEnter) => {
      // cy.get(`.body > main > section > div > form > label:nth-child(1) > input(${happyEnter.login})`)
      cy.get('[type="email"]').type(happyEnter.login);
      // cy.get(`.body > main > section > div > form > label:nth-child(2) > input(${happyEnter.password})`)
      cy.get(('[for="pwd"]')).type(happyEnter.password);
      // cy.get(`.body > main > section > div > form > div > input`).click()
      cy.get('.login__button')
      cy.get(`.login__button`).click()
    })
  })

  it('check admin page sad path', () => {
    cy.visit('http://qamid.tmweb.ru/admin/')
    const sadAdmin = require('../fixtures/sadPath.json')
    sadAdmin.forEach((sadEnter) => {
      // cy.get(`.body > main > section > div > form > label:nth-child(1) > input(${sadEnter.login})`)
      cy.get('[type="email"]').type(sadEnter.login);
      // cy.get(`.body > main > section > div > form > label:nth-child(2) > input(${sadEnter.password})`)
      cy.get(('[for="pwd"]')).type(sadEnter.password);
      // cy.get(`.body > main > section > div > form > div > input`).click()
      cy.get('.login__button')
      cy.get(`.login__button`).click()
    })
  })

  it.only('check movie booking', () => {
    cy.visit('http://qamid.tmweb.ru/admin/')
    const adminPath = require('../fixtures/adminPath.json')
    adminPath.forEach((adminEnter) => {
      cy.get('[type="email"]').type(adminEnter.login);
      cy.get(('[for="pwd"]')).type(adminEnter.password);
      cy.get('.login__button')
      cy.get(`.login__button`).click()
    cy.get('#grid-session > div > div.conf-step__movies > div:nth-child(1) > h3').then(($el) => $el.textContent).should('have.text','Зверополис');
    cy.get('conf-step__seances-movie-title').invoke('text').then((text) => {
      cy.visit("http://qamid.tmweb.ru/client/index.php");
      cy.get('body > main > section:nth-child(1) > div.movie__info > div.movie__description > h2').should('have.text', 'Зверополис');
      cy.get('movie__title').click();
    })
    })
  })

})