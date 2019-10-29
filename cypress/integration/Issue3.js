describe ('Issue #3: no permite eliminar registros de personas.', function () {
    it('Visitar sitio "Catalog de personas"', function () {
        cy.visit('http://educ.ddns.net:88/pruebas-cypress/')
    })

    it('Eliminar registros', function () {
        cy.get(':nth-child(34) > :nth-child(5) > .btn-danger').click()
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })