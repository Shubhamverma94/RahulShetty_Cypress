
class CheckProductCount {
    getProductCount() {
      return cy.get('.thumbnail').should('have.length.greaterThan', 0)
    }
  }
  
  export default CheckProductCount
  