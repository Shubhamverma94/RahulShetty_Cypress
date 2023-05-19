
class GetTotalCost {
    getTotalCostForNormalProduct() {
      let totalCost = 0
      cy.get('.product-price').each(($el) => {
        const price = $el.text().replace('$', '')
        totalCost += parseFloat(price)
      }).then(() => {
        return totalCost
      })
    }
  }
  
  export default GetTotalCost
  