$(document).ready(function(){

  //FoodItem
  var FoodElements = {
    container: ".container",
    foodTemplate: "#food-template"
  }

  var BasketElements = {
    basket: ".basket",
    basketTemplate: "#basket-template"
  }


  var food = new FoodList('https://api.nutritionix.com/v1_1/search/')

  var basket = new Basket()
  var basketView = new BasketView(BasketElements)
  var FoodView = new FoodListView(FoodElements)
  var foodController = new FoodController(food, FoodView, basket, basketView)

  //Application
  var controllers = {
    foodController: foodController
  }
  var applicationController = new ApplicationController(controllers)

  //Driver Code
  applicationController.bindListeners()

})


