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
      cy.get(`.body > main > section > div > form > label:nth-child(1) > input(${happyEnter.login})`)
      cy.get(`.body > main > section > div > form > label:nth-child(2) > input(${happyEnter.password})`)
      cy.get(`.body > main > section > div > form > div > input`).click()
    })
  })

  it('check admin page sad path', () => {
    cy.visit('http://qamid.tmweb.ru/admin/')
    const sadAdmin = require('../fixtures/sadPath.json')
    sadAdmin.forEach((sadEnter) => {
      cy.get(`.body > main > section > div > form > label:nth-child(1) > input(${sadEnter.login})`)
      cy.get(`.body > main > section > div > form > label:nth-child(2) > input(${sadEnter.password})`)
      cy.get(`.body > main > section > div > form > div > input`).click()
  })
})

})