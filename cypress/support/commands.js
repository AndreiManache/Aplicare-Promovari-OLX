Cypress.Commands.add('loginIfNeeded', () => {
    if (!Cypress.env('loggedIn')) {
        cy.visit('https://www.olx.ro/adminpanel/login/?ref%5B0%5D%5Baction%5D=usercards&ref%5B0%5D%5Bmethod%5D=index');
        cy.get(".btn.btn-primary.btn-lg.okta-login-btn").click();

        cy.on('uncaught:exception', (err, runnable) => {
            // Handle the error here, if needed
            // You can log the error, assert its properties, or perform any other actions
            // Returning false prevents Cypress from failing the test
            return false;
        });

        cy.origin('https://olxgroup.okta-emea.com', () => {
            cy.get(".input-fix #input28").type("andrei.manache@olx.ro")
            cy.get('.input-fix #input28').should('have.value', 'andrei.manache@olx.ro')
            cy.get('.input-fix #input36').type('Divinacomedie2!')
            cy.get('[data-se-for-name="rememberMe"]').click()
            cy.get('.o-form-button-bar input').click()
            cy.get('#form60 > div.authenticator-verify-list.authenticator-list > div > div:nth-child(2) > div.authenticator-description > div.authenticator-button > a').click() // Updated the selector, it should match your actual page
            cy.wait(10000);

            Cypress.env('loggedIn', true);
        })
    }
});

