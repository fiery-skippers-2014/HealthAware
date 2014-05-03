function BasketView(basketElements){
  this.basketTemplate = basketElements["basketTemplate"]
  this.basket = basketElements["basket"]
}

BasketView.prototype = {
  drawOldBasket: function(basket){
    var source = $(this.basketTemplate).html()
    var template = Handlebars.compile(source)
    $(this.basket).html(template(basket))
  }
}