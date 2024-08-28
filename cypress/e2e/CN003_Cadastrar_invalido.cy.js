describe('cadastro incorreto', () => {
    it('realizar cadastro com dados invalidos', () => {
      //iniciar 
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      //
      cy.get('[data-test="register-button"]').click();
      //validar botão de cadastrar e clicar
      cy.contains('button','Cadastrar').click();
      cy.contains('É necessário informar um endereço de email').should('be.visible');
      cy.contains('Crie uma senha').should('be.visible');
      cy.contains('Repita a senha criada acima').should('be.visible');
    })
  })