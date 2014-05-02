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

  var food = new FoodList('https://api.nutritionix.com/v1_1/search/kale%20Leafline?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=c6626cb4&appKey=efd276c977110710dbcc73b6ffbfc9dc')
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
  foodController.summonFood()
})
