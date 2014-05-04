function FoodListView(foodElements){
  this.container = foodElements["container"]
  this.foodTemplate = foodElements["foodTemplate"]
}

FoodListView.prototype = {
  drawFoods: function(json, foodTemplate){
    console.log(json)
    var source = foodTemplate.html()
    var template = Handlebars.compile(source)
    $('.searched').html(template(json))
  }
}
