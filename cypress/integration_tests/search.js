/// <reference types="Cypress" />
import HeaderPage from "./page_objects/HeaderPage"

describe('Successfull search', function() {

    let end_point = 'actions/Catalog.action'
    let ANGEL_FISH_PRODUCT_CODE = 'FI-SW-01'

    const headerPage = new HeaderPage()

    it('Successfull search', () => {
        cy.log("LOG=" + Cypress.env('url'))
        cy.visit(Cypress.env('url') + end_point)
        headerPage.getSearchBox().clear().type("fish{enter}")

        cy.get('tbody tr td:nth-child(3)')
            .then((items) => {
                const list = Array.from(items, (item) => item.innerText)
                expect(list).to.include('Angelfish')
        })
        
        cy.get('tbody tr').each(($el, index, $list) => {
          const name =  $el.text()
          $list.filter($el.text().includes("Angelfish"))

          if(name.includes("Angelfish")){
            cy.wrap($el).find("td:nth-child(2)").then(function(data){
                expect(data.text().trim()).to.be.equal(ANGEL_FISH_PRODUCT_CODE)
            })
        }
        })
    })

  })

  


