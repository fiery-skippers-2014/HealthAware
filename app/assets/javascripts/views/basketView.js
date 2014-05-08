function BasketView(){
  this.basket=".basket",
  this.basketTemplate="#basket-template"
}

BasketView.prototype = {
  draw: function(basket){
    // basket.oldfoodarray.reverse()
    var source = $(this.basketTemplate).html()
    var template = Handlebars.compile(source)
    $(this.basket).html(template(basket))
  }
}