function FoodListView(foodElements){
  this.container = foodElements["container"]
  this.foodTemplate = foodElements["foodTemplate"]
}

FoodListView.prototype = {
  drawFoods: function(json){
    var source = $(this.foodTemplate).html()
    var template = Handlebars.compile(source)
    $(this.container).html(template(json))
  }
}
