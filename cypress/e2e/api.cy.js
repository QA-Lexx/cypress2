const { expect } = require("chai")
const { method } = require("cypress/types/lodash")

describe('pet store', () => {

    it('create user test', () => {

        cy.request({
            url: 'https://petstore.swagger.io/v2/user',
            method: 'POST',
            body: {
                "id": 1234,
                "name": "User1",
                "photoUrls": []
            }
        }).then((response) => {
            expect(response.status).eq(200)
            expect(response.body).eql({
                "id": 1234,
                "name": "User1",
                "photoUrls": []
            })
        })
    
        cy.request({
            url: 'https://petstore.swagger.io/v2/user',
            method: 'PUT',
            body: {
                "id": 1234,
                "name": "User1",
                "photoUrls": [],
                "surname": "User01"
            }
        }).then((response) => {
            expect(response.status).eq(200)
            expect(response.body).eql({
                "id": 1234,
                "name": "User1",
                "photoUrls": [],
                "surname": "User01"
            })
        })

        cy.request('DELETE', `https://petstore.swagger.io/v2/user/${response.body.id}`).then((deleteResponse) => {
            expect(deleteResponse.status).eq(200)
        })

    })

})