
class AssertProductCount {
    assertProductCount() {
      cy.get('.thumbnail').should('have.length.greaterThan', 0)
    }
  }
  
  export default AssertProductCount
  