// run in initialize.js
function FoodController(model, view){
  this.model = model // hard-coded url request (so far)
  this.view = view // hash of elements important for food-template
}

FoodController.prototype = {
  // run in controllers/applicationController.js
  bindFoodListeners: function(){
    var food = this.model
    var foodView = this.view
    // on foodsList event created within foodList model, create template with model's elements AKA foodView (because you are binding the function to foodView)
    $(document).on("foodList", foodView.drawFoods.bind(foodView))
  },

  // run at the end of initialize.js
  summonFood: function() {
   // on successful ajax request on the url within model, event is created and triggered resulting with json for FoodController to work with within initialize.js
    this.model.fetchFood()
  }
}
