describe('cadastro', () => {
  beforeEach(()=> {
    //iniciar teste - adopet
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
})

  it('realizar cadastro com dados válidos', () => {
    cy.cadastrar('Nicholas Luiz','nicholasnkzambom@gmail.com','NicholasNIC@1');
    //validar botão de cadastrar
    cy.contains('button','Cadastrar').click();
  })
})