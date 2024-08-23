describe('Realizar Login com usuario valido', ()=> {
    it('logar',() =>{
        //iniciar teste - adopet
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        //
        cy.contains('a','Fazer login').click();
        //validar campo de login
        cy.get('input[id="email"').should('be.visible');
        cy.get('input[id="email"').type("nicholasnkzambom@gmail.com");
        //validar campo de senha
        cy.get('input[id="pass"').should('be.visible');
        cy.get('input[id="pass"').type("NicholasNIC@12");
        //clicar no botão de entrar
        cy.contains('button','Entrar').click();
    })
})