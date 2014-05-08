$(document).ready(function(){
  var formView = new FormView()
  var goalsController = new GoalsController(formView)
  var search = new Food('https://api.nutritionix.com/v1_1/search/')
  var basket = new Basket()
  var basketView = new BasketView()
  var goalView = new GoalView()
  var healthView = new HealthView()

  var basketsController = new BasketsController({
    "search"    : search,
    "basket"    : basket,
    "basketView": basketView,
    "goalView"  : goalView,
    "healthView": healthView
  })
  goalsController.bindEvents();
  basketsController.bindEvents();
})
