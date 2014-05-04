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

  var FormElements = {
    amountCustom: "#amount_custom",
    customLimit: "#custom_limit"
  }


  var food = new FoodList('https://api.nutritionix.com/v1_1/search/')

  var basket = new Basket()
  var basketView = new BasketView(BasketElements)
  var FoodView = new FoodListView(FoodElements)
  var healthView = new HealthView(HealthElements)
  var foodController = new FoodController(food, FoodView, basket, basketView, healthView)
  var formView = new FormView(FormElements)
  var formController = new FormController(formView)

  //Application
  var controllers = {
    foodController: foodController,
    formController: formController
  }
  var applicationController = new ApplicationController(controllers)

  //Driver Code
  applicationController.bindListeners()

})
