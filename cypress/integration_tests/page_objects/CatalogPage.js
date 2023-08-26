class CatalogPage{

    go(){
        cy.visit(env.url + 'actions/Catalog.action')
    }

    getWelcomeMessage(){
        return cy.get('#WelcomeContent')
    }
}

export default CatalogPage