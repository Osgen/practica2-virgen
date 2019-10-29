
describe ('Issue #1 : agrega al listado principal de personas el campo “Dirección” y quitar el campo “Fecha”. ', function () {
    it('Visitar sitio  "Catalog de personas"', function () {
        cy.visit('http://educ.ddns.net:88/pruebas-cypress/')
    })

    it('agrega al listado principal de personas el campo “Dirección”', function () {
        cy.get('thead > tr > :nth-child(3)').contains('Dirección')
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })