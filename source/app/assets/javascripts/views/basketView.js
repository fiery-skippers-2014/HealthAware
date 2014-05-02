function BasketView(basketElements){
  this.basketTemplate = basketElements["basketTemplate"]
  this.basket = basketElements["basket"]
}

BasketView.prototype = {
  drawBasket: function(basket){
    console.log("this.basket")
    console.log(basket)
    var source = $(this.basketTemplate).html()
    var template = Handlebars.compile(source)
    $(this.basket).html(template(basket))
  }

}