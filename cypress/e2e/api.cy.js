describe('pet store', () => {

    it('create user test', () => {

        cy.request({
            url: 'https://petstore.swagger.io/v2/user',
            method: 'POST',
            name: "morpheus",
            job: "leader",
            id: 1234,
            body: {
                "name": "User1",
                "photoUrls": []
            }
        }).then((response) => {
            expect(response.status).eq(200)
            })

    })

    it('change user test', () => {

        cy.request({
            url: 'https://petstore.swagger.io/v2/user',
            method: 'POST',
            name: "morpheus",
            job: "leader",
            id: 1234,
            body: {
                "name": "User1",
                "photoUrls": []
            }
        }).then((response) => {
            expect(response.status).eq(200)
            })

        cy.request("PUT", "https://petstore.swagger.io/v2/user/${response.body.id}", {
            name: "QAAutomationLabs",
            job: "QA Automation Engg",
        }).should((response) => {
            expect(response.status).to.eq(200);
            });

    });

    it('delete user test', () => {

        cy.request({
            url: 'https://petstore.swagger.io/v2/user',
            method: 'POST',
            name: "morpheus",
            job: "leader",
            id: 1234,
            body: {
                "name": "User1",
                "photoUrls": []
            }
        }).then((response) => {
            expect(response.status).eq(200)
            })

        cy.request("PUT", "https://petstore.swagger.io/v2/user/${response.body.id}", {
            name: "QAAutomationLabs",
            job: "QA Automation Engg",
        }).should((response) => {
            expect(response.status).to.eq(200);
            });

        cy.request(
            {
                failOnStatusCode: false,
                url: "https://petstore.swagger.io/v2/user/${response.body.id}"
            }).then((getResponse) => {
                expect(getResponse.status).eq(404)
            })

    })

})