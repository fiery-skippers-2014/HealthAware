function FoodListView(foodElements){
  this.container = foodElements["container"]
  this.foodTemplate = foodElements["foodTemplate"]
}

FoodListView.prototype = {
  drawFoods: function(json, foodTemplate){
    console.log(this)
    var source = foodTemplate.html()
    var template = Handlebars.compile(source)
    $('.container').html(template(json))
  }
}
