describe ('Issue #2: Agrega el campo teléfono en la tabla datos después del campo dirección y que funcione en todas las interfaces del sistema.', function () {
    it('Visitar sitio "Catalog de personas"', function () {
        cy.visit('http://educ.ddns.net:88/pruebas-cypress/')
    })

    it('Mostrar nuevo campo: “Telefono”', function () {
        cy.get('thead > tr > :nth-child(3)').next().contains('Teléfono')
    })

    it('Agregar con el campo “Telefono”', function () {
        cy.get('thead > tr > :nth-child(5) > .btn').click();
        cy.get(':nth-child(1) > .col-md-7 > .form-control')
            .type('OscarV').should('have.value','OscarV')
        cy.get(':nth-child(2) > .col-md-11 > .form-control')
            .type('Lazaron').should('have.value','Lazaron')
        cy.get(':nth-child(3) > .col-md-11 > .form-control')
            .type('3121123').should('have.value','3121123')
        cy.get('.modal-footer > .btn-primary').click({force:true})
    })

    it('Editar con el campo “Telefono”', function () {
        cy.get(':nth-child(34) > :nth-child(5) > .btn-primary').click()
        cy.get(':nth-child(2) > .col-md-11 > .form-control')
            .type('Lazaro -Editado-').should('have.value','LazaronLazaro -Editado-')
        cy.get(':nth-child(3) > .col-md-11 > .form-control')
            .type('1233331').should('have.value','31211231233331')
        cy.get('.modal-footer > .btn-primary').click({force:true})
    })
})


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })