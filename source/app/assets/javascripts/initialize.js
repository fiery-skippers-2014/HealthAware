$(document).ready(function(){

  //FoodItem
  var FoodElements = {
    container: ".container",
    foodTemplate: "#food-template"
  }

  var basket = new BasketList()
  var food = new FoodList('https://api.nutritionix.com/v1_1/search/kale?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=c6626cb4&appKey=efd276c977110710dbcc73b6ffbfc9dc')
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
  console.log(foodController)
  foodController.summonFood()
})