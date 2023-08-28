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

    function test(productName){
        let isFound = false
        cy.get('tbody tr').each(($el, index, $list) => {
            if(index > 0 && index < $list.length - 1){
                const product =  $el.find('td:nth-child(3)').text()
                if(product.includes(productName)){
                    isFound = true
                    const price = $el.find("td:nth-child(4)").text()
                    cy.get('@sum').then(function(value){
                        cy.wrap(parseFloat(value) + parseFloat(price)).as('sum')
                    })
                    cy.wrap($el).find("td:nth-child(5)").find('.Button').click()
                }
            }
            if(isFound){
                return false
            }
         })     
    }
    

    beforeEach(function() { 
        cy.fixture("users").then(function(data){
            cy.login(data.username, data.password)
        })  
      })

      it('Check shopping', function() {              
        cy.wrap(0.0).as('sum') 

        cy.visit(Cypress.env('url') + first_product_end_point)        
        test("Male Adult")

        cy.visit(Cypress.env('url') + second_product_end_point)
        test("Venomless")

        cy.get('[colspan="8"]').then(function(data){
            expect(this.sum).to.be.equal(parseFloat(data.text().substring(12)))          
        })
         
    })

  })

  


