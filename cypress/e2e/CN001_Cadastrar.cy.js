describe('cadastro', () => {
  beforeEach(()=> {
    //iniciar teste - adopet
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
})

  it('realizar cadastro com dados válidos', () => {
    cy.get('[data-test="register-button"]').click();
    //validar campo name
    cy.get('input[name="nome"]').should('be.visible');
    cy.get('input[name="nome"]').type("Nicholas Luiz");
    //cy.get('input[id="email"]').should('be.visible').type("nicholas@gmail.com");
    //validar campo de email
    cy.get('input[id="email"]').should('be.visible');
    cy.get('input[id="email"]').type("nicholasnkzambom@gmail.com");
    //validar campo senha e confirme senha
    cy.get('input[id="pass-create"]').should('be.visible');
    cy.get('input[id="pass-create"]').type("NicholasNIC@12");
    cy.get('input[id="pass-confirm"]').should('be.visible')
    cy.get('input[id="pass-confirm"]').type("NicholasNIC@12");

    //validar botão de cadastrar
    cy.contains('button','Cadastrar').click();
  })
})