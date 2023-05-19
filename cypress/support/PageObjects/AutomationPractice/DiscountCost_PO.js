
class GetTotalDiscountCost {
    getTotalCostForDiscountProduct() {
      let totalCost = 0
      cy.get('.product-price').each(($el) => {
        const discountedPrice = $el.find('.PriceNew').text().replace('$', '')
        if (discountedPrice) {
          totalCost += parseFloat(discountedPrice)
        }
      }).then(() => {
        return totalCost
      })
    }
  }
  
  export default GetTotalDiscountCost
  