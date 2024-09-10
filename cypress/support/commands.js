Cypress.Commands.add('login',(email,password)=>{ 
cy.get('input[id="email"').should('be.visible');
cy.get('input[id="email"').type(email);
//validar campo de senha
cy.get('input[id="pass"').should('be.visible');
cy.get('input[id="pass"').type(password);
//clicar no botão de entrar
cy.contains('button','Entrar').click();
})

Cypress.Commands.add('cadastrar',(nome, email, senha) =>{
    cy.get('[data-test="register-button"]').click();
    //validar campo name
    cy.get('[data-test="input-name"]').should(' be.visible');
    cy.get('[data-test="input-name"]').type(nome);
    //cy.get('input[id="email"]').should('be.visible').type("nicholas@gmail.com");
    //validar campo de email
    cy.get('[data-test="input-email"]').should('be.visible');
    cy.get('[data-test="input-email"]').type(email);
    //validar campo senha e confirme senha
    cy.get('[data-test="input-password"]').should('be.visible');
    cy.get('[data-test="input-password"]').type(senha);
    cy.get('[data-test="input-confirm-password"]').should('be.visible')
    cy.get('[data-test="input-confirm-password"]').type(senha);

})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })