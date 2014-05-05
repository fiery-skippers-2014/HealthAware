function BasketView(basketElements){
  this.basketTemplate = basketElements["basketTemplate"]
  this.basket = basketElements["basket"]
}

BasketView.prototype = {
  drawOldBasket: function(basket){
    // basket["today"] = basket.oldfoodarray[0].updated_at
    // basket["last_updated"] = basket.oldfoodarray[basket.oldfoodarray.length-1].created_at
    debugger
    basket.oldfoodarray.reverse()
    var source = $(this.basketTemplate).html()
    var template = Handlebars.compile(source)
    $(this.basket).html(template(basket))
  }
}