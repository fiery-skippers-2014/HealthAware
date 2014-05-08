$(document).ready(function(){
  var HA = {}
  // REVIEW: I think views should define their own elements.
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

  var formView = new FormView(FormElements)
  var formController = new FormController(formView) // this name is too generic. This should move into a GoalsController.
  var food = new FoodList('https://api.nutritionix.com/v1_1/search/')
  var basket = new Basket()
  var basketView = new BasketView(BasketElements)
  var FoodView = new FoodListView(FoodElements)
  var healthView = new HealthView(HealthElements)
  var foodController = new FoodController({
    "model"     : food,
    "Foodview"  : FoodView,
    "basket"    : basket,
    "basketView": basketView,
    "Healthview": healthView
  })

  //Application
  var controllers = {
    foodController: foodController,
    formController: formController
  }

  var applicationController = new ApplicationController(controllers)

  //Driver Code
  applicationController.bindListeners()
})
