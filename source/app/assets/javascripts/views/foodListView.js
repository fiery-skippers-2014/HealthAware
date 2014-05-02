function FoodListView(foodElements){
  this.container = foodElements["container"]
  this.foodTemplate = foodElements["foodTemplate"]

}

FoodListView.prototype = {
  drawFoods: function(e,json){
  	this.allFoodResults = json

    var source = $(this.foodTemplate).html()
    var template = Handlebars.compile(source)
    $(this.container).html(template(json))
  },
  // basketThatFood: function(e){
  //  	//Visual
  //  	$(e.currentTarget).addClass('basket')
  //  	//Save to Database

  //  	console.log(e.currentTarget.getElementsByTagName('li')[0].getAttribute('food-id'))
  //  	console.log(this.allFoodResults)
  // }
}
