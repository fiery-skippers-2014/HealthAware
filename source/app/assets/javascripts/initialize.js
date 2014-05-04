$(document).ready(function(){

  //FoodItem
  var FoodElements = {
    container: ".searched",
    foodTemplate: "#food-template"
  }

  //BasketItem
  var BasketElements = {
    basket: ".basket",
    basketTemplate: "#basket-template"
  }

  var HealthElements = {
    health: ".health-stats",
    healthTemplate: "#health-template"
  }


  var food = new FoodList('https://api.nutritionix.com/v1_1/search/')

  var basket = new Basket() // a model which knows a currently empty oldfoodarray, goals, and an empty progress object. this model:
    // can save an object to basket/database
      // putting that json object into the oldfoodarray (creating an 'oldList' event)
    // grabbing
  var basketView = new BasketView(BasketElements) // knows basket elements and has ability to create a view based on a handlebar template
  var FoodView = new FoodListView(FoodElements)
  var healthView = new HealthView(HealthElements)
  var foodController = new FoodController(food, FoodView, basket, basketView, healthView) //

  //Application
  var controllers = {
    foodController: foodController
  }
  var applicationController = new ApplicationController(controllers)

  //Driver Code
  applicationController.bindListeners()

})
