/// <reference types="Cypress" />

describe('parent', function() {

  let dd

    beforeEach(function() {
      dd = 34
      cy.wrap('one').as('a')
      cy.log('dd = ' + dd)
      cy.log(this.a)
    })
  
    context('child', function() {
      beforeEach(() => {
        cy.log(this.a)
        cy.log('dd = ' + dd)
        cy.wrap('two').as('b')
      })
  
      describe('grandchild', function() {
        beforeEach(() => {
          cy.log(this.a)
          cy.wrap('three').as('c')
        })
  
        it('can access all aliases as properties', function () {
          cy.log(this.a)
          expect(this.a).to.eq('one') // true
          expect(this.b).to.eq('two') // true
          expect(this.c).to.eq('three') // true

          let name
          cy.fixture('users').then(function(user) {
            // now we can avoid the alias altogether
            // and use a callback function
            name = user.name
            cy.wrap(name).as('myname')         
          })

          cy.get('@myname').then(function(data){
            cy.log(data)
            expect(data).to.eq('fg')
          })
          //expect(this.myname).to.eq('fg')
        })
          
      })
    })
  })