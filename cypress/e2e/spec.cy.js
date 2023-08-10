describe('movie tickets', () => {

  it('check main page', () => {
    cy.visit('http://qamid.tmweb.ru/client/index.php')
  })

  it('check admin page happy path', () => {
    cy.visit('http://qamid.tmweb.ru/admin/')
    const happyAdmin = require('../fixtures/happyPath.json')
    happyAdmin.forEach((happyEnter) => {
      cy.get('[type="email"]').type(happyEnter.login);
      cy.get(('[for="pwd"]')).type(happyEnter.password);
      cy.get('.login__button')
      cy.get(`.login__button`).click()
    })
  })

  it('check admin page sad path', () => {
    cy.visit('http://qamid.tmweb.ru/admin/')
    const sadAdmin = require('../fixtures/sadPath.json')
    sadAdmin.forEach((sadEnter) => {
      cy.get('[type="email"]').type(sadEnter.login);
      cy.get(('[for="pwd"]')).type(sadEnter.password);
      cy.get('.login__button')
      cy.get(`.login__button`).click()
    })
  })

  it('check movie booking', () => {
    cy.visit('http://qamid.tmweb.ru/admin/')
    const adminPath = require('../fixtures/adminPath.json')
    adminPath.forEach((adminEnter) => {
      cy.get('[type="email"]').type(adminEnter.login);
      cy.get(('[for="pwd"]')).type(adminEnter.password);
      cy.get('.login__button')
      cy.get(`.login__button`).click()
    cy.get('#grid-session > div > div.conf-step__movies > div:nth-child(1) > h3').then(($el) => $el.textContent).should('have.text','Зверополис');
      cy.visit('http://qamid.tmweb.ru/client/index.php/');
      cy.get('body > main > section:nth-child(1) > div.movie__info > div.movie__description > h2').should('have.text', 'Зверополис');
      cy.get('.page-nav__day').should('have.length', 7)
      cy.get('.page-nav__day').eq(2).click()
      cy.get('body > main > section:nth-child(1) > div:nth-child(2) > ul > li > a').click()
      const seats = require('../fixtures/seats.json')
      seats.forEach((seat) => {
        cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click()
      })
      cy.get('body > main > section > button').click()
      cy.visit("http://qamid.tmweb.ru/client/payment.php")
      cy.get('body > main > section > div > button').click()
    })
  })

})