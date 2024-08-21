describe('template spec', () => {
  it('passes', () => {
    //iniciar 
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    //
    cy.contains('a','Cadastrar').click();
    //validar campo name
    cy.get('input[name="nome"]').should('be.visible');
    cy.get('input[name="nome"]').type("Nicholas Luiz");
    //cy.get('input[id="email"]').should('be.visible').type("nicholas@gmail.com");
    //validar campo de email
    cy.get('input[id="email"]').should('be.visible');
    cy.get('input[id="email"]').type("nicholas@gmail.com");
    //validar campo senha e confirme senha
    cy.get('input[id="pass-create"]').should('be.visible');
    cy.get('input[id="pass-create"]').type("123456Mudar");
    cy.get('input[id="pass-confirm"]').should('be.visible')
    cy.get('input[id="pass-confirm"]').type("123456Mudar");

    //validar botão de cadastrar
    cy.contains('button','Cadastrar').click();
  })
})