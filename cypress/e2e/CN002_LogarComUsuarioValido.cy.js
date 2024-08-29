describe('Realizar Login com usuario valido e clicar em falar', ()=> {
    beforeEach(()=> {
        //iniciar teste - adopet
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        //validar campo de login
        cy.contains('a','Fazer login').click();
    })

    it('realizar login e validar home',() =>{
        //validar campo de login
        cy.get('input[id="email"').should('be.visible');
        cy.get('input[id="email"').type("nicholasnkzambom@gmail.com");
        //validar campo de senha
        cy.get('input[id="pass"').should('be.visible');
        cy.get('input[id="pass"').type("NicholasNIC@12");
        //clicar no botão de entrar
        cy.contains('button','Entrar').click();
        //validar pagina de login icon de email e home (header esta visivel
        cy.get('.header__user').should('be.visible');
        //validar falar com responsavel - adopet
        cy.get(':nth-child(1) > .card__contact').should('be.visible');
        cy.get(':nth-child(1) > .card__contact').click();
        //validar texto de falar com responsavel
        cy.get('section[class="message"]').should('be.visible');
    })
})