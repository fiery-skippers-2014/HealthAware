$(document).ready(function(){

  //FoodItem
  var FoodElements = {
    container: ".container",
    foodTemplate: "#food-template"
  }


  var food = new FoodList('https://api.nutritionix.com/v1_1/search/')

  var basket = new BasketList()
  var FoodView = new FoodListView(FoodElements)
  var foodController = new FoodController(food, FoodView, basket)

  console.log("food!")
  console.log(food)
  //Application
  var controllers = {
    foodController: foodController
  }
  var applicationController = new ApplicationController(controllers)

  //Driver Code
  applicationController.bindListeners()

})
