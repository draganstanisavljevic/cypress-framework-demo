class ProductPage{

    getRows(){
        return cy.get('tr')
    }

    getAddToCartButton(){
        cy.get('.Button')
    }
}

export default ProductPage