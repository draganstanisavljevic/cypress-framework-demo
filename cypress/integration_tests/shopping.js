/// <reference types="Cypress" />
import SignInPage from "./page_objects/SignInPage"
import CatalogPage from "./page_objects/CatalogPage"

const loginByForm = () => {
    cy.log("I am deffined as const")
  }

describe('Shopping feature', function() {

    let first_product_end_point = '/actions/Catalog.action?viewProduct=&productId=K9-BD-01'
    let second_product_end_point = '/actions/Catalog.action?viewProduct=&productId=RP-SN-01'
    const signInPage = new SignInPage()
    //this.sum = 0.0

    function test($el, index, $list, productName){
        cy.log("INDEX = " + index)
        if(index > 0 && index < $list.length - 1){
            const product =  $el.find('td:nth-child(3)').text()
            if(product.includes(productName)){
                cy.wrap(true).as('isFound')
                const price = $el.find("td:nth-child(4)").text()
                cy.get('@sum').then(function(value){
                    cy.wrap(parseFloat(value) + parseFloat(price)).as('sum')
                })
                cy.wrap($el).find("td:nth-child(5)").find('.Button').click()
            }
        }     
    }

    beforeEach(function() { 
        cy.fixture("users").then(function(data){
            cy.wrap(data.username).as('myusername')
            cy.wrap(data.password).as('mypassword')
            cy.login(data.username, data.password)
        })  
      })

      it('Check shopping', function() {              
        cy.wrap(0.0).as('sum') 
        cy.wrap(false).as('isFound')

        cy.visit(Cypress.env('url') + first_product_end_point)        
        cy.get('tbody tr', { timeout: 5000 }).each(($el, index, $list) => {
                test($el, index, $list, "Male Adult")
          })

        cy.wrap(false).as('isFound')

        cy.visit(Cypress.env('url') + second_product_end_point)
        cy.get('tbody tr').each(($el, index, $list) => { 
           test($el, index, $list, "Venomless")
        })

        cy.get('[colspan="7"]').then(function(data){
            expect(this.sum).to.be.equal(parseFloat(data.text().substring(12)))          
        })
         
    })

  })

  


