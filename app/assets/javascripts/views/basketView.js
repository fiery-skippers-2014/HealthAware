function BasketView(basketElements){
  this.basketTemplate = basketElements["basketTemplate"]
  this.basket = basketElements["basket"]
}

BasketView.prototype = {
  // keep your views consistent, they all expose a draw method.
  drawOldBasket: function(basket){
    basket.oldfoodarray.reverse()
    var source = $(this.basketTemplate).html()
    var template = Handlebars.compile(source)
    $(this.basket).html(template(basket))
  }
}
