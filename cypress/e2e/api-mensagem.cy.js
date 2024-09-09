describe('api adopet',()=>{
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYjk0Y2E3My0xN2RiLTQ2YTQtODQ0Yi1kZjBjZWJjNDc1MmQiLCJhZG9wdGVyTmFtZSI6Ik5pY2hvbGFzIEx1aXoiLCJpYXQiOjE3MjU5MTY0MDYsImV4cCI6MTcyNjE3NTYwNn0.zAisr0rwsxiKl4FXsU2cARGpxMFMKz2Rk4-yjniMO5M`

    it('Mensagens da api ',()=> {
            cy.request({
                method: 'GET',
                url: 'https://adopet-api-i8qu.onrender.com/mensagem/db94ca73-17db-46a4-844b-df0cebc4752d',
                headers: { authorization }
            }).then((res) =>{
                //capturar e esperar a resposta do response (200, body não vazio)
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body).to.have.property('msg')
            })
    })
})