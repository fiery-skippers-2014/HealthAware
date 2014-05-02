$(document).ready(function(){

  //FoodItem
  var FoodElements = {
    container: ".container",
    foodTemplate: "#food-template"
  }
  // var BasketElements = {
  //   container: ".profile",
  //   foodTemplate: "#basket-template"
  // }

  var food = new FoodList('https://api.nutritionix.com/v1_1/search/')
  var FoodView = new FoodListView(FoodElements)

  // var basket = new BasketList
  // var BasketView = new BasketListView(BasketElements)



  var foodController = new FoodController(food, FoodView)
  // var basketController = new FoodController(basket, BasketView)

  //Application
  var controllers = {
    foodController: foodController
    // basketController: basketController
  }
  var applicationController = new ApplicationController(controllers)

  //Driver Code
  applicationController.bindListeners()
  // foodController.summonFood()
})
