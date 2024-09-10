import {usuarios} from '../fixtures/usuarios.json'

describe('Pagina de cadastro',()=>{
    beforeEach( () =>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
    })
    usuarios.forEach(usuario =>{
        it('Deve preencher os campos do forms corretamente',() =>{
            cy.get('[data-test="input-name"]').clear().type(usuario.name);

            cy.get('[data-test="input-email"]').should('be.visible');
            cy.get('[data-test="input-email"]').clear().type(usuario.email);

            cy.get('[data-test="input-password"]').should('be.visible');
            cy.get('[data-test="input-password"]').clear().type(usuario.password);

            cy.get('[data-test="input-confirm-password"]').should('be.visible')
            cy.get('[data-test="input-confirm-password"]').clear().type(usuario.password);
        })
    })
})