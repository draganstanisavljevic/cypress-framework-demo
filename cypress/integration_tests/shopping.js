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
    this.sum = 0.0

    beforeEach(function() {
        cy.fixture("users").then(function(data){
            let username = data.username
            let password = data.password
            cy.login(username, password)
        })
        
      })

      it('Check shopping 1', function() {  
        loginByForm("YY", "UU")
      })

      it('Check shopping', function() {  
             
        this.sum = 0.0   
        cy.visit(Cypress.env('url') + first_product_end_point)
        let isFound = false
        cy.get('tbody tr', { timeout: 5000 }).each(($el, index, $list) => {
            cy.log("INDEX = " + index)
            if(index > 0 && index < $list.length - 1){
                const product =  $el.find('td:nth-child(3)').text()
                if(product.includes("Male Adult")){
                    isFound = true
                    const price = $el.find("td:nth-child(4)").text()
                    this.sum = this.sum + parseFloat(price)
                    cy.wrap($el).find("td:nth-child(5)").find('.Button').click()
                }
            }          
          })

        isFound = false

        cy.visit(Cypress.env('url') + second_product_end_point)
        cy.get('tbody tr').each(($el, index, $list) => { 
            if(index > 0 && index < $list.length - 1){
                const product =  $el.find('td:nth-child(3)').text()
                if(product.includes("Venomless")){
                    isFound = true
                    const price = $el.find("td:nth-child(4)").text()
                    this.sum = parseFloat(this.sum) + parseFloat(price)
                    cy.wrap($el).find("td:nth-child(5)").find('.Button').click()
                }
            }
        })

        let finalPrice
        cy.get('[colspan="7"]').then(function(data){
            expect(this.sum).to.be.equal(parseFloat(data.text().substring(12)))          
        })
         
    })

  })

  


