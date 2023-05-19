
class AssertTotalCost {
    assertTotalCost() {
      let totalCost = 0
      cy.get('.product-price').each(($el) => {
        const price = $el.text().replace('$', '')
        const discountedPrice = $el.find('.PriceNew').text().replace('$', '')
        if (discountedPrice) {
          totalCost += parseFloat(discountedPrice)
        } else {
          totalCost += parseFloat(price)
        }
      }).then(() => {
        cy.get('.total-shop-price').should('have.text', `$${totalCost.toFixed(2)}`)
      })
    }
  }
  
  export default AssertTotalCost
  