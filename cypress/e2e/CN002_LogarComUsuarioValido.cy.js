describe('Realizar Login com usuario valido e clicar em falar', ()=> {
    beforeEach(()=> {
        //iniciar teste - adopet
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    it('realizar login e validar home',() =>{
        cy.login('nicholasnkzambom@gmail.com','NicholasNIC@12');
        //validar pagina de login icon de email e home (header esta visivel)
        cy.get('.header__user').should('be.visible');
        //validar falar com responsavel - adopet
        cy.get(':nth-child(1) > .card__contact').should('be.visible');
        cy.get(':nth-child(1) > .card__contact').click();
        //validar texto de falar com responsavel
        cy.get('section[class="message"]').should('be.visible');
    })
})