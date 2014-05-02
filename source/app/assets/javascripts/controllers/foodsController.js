// run in initialize.js
function FoodController(model, view, basket){
  this.model = model // hard-coded url request (so far)
  this.view = view // hash of elements important for food-template
  this.allFoodResults
  this.basket = basket
}

FoodController.prototype = {
  // run in controllers/applicationController.js
  bindFoodListeners: function(){
    var food = this.model
    var foodView = this.view
    var basket = this.basket
    // on foodsList event created within foodList model, create template with model's elements AKA foodView (because you are binding the function to foodView)
    $(document).on("foodList", foodView.drawFoods.bind(foodView))
    $(document).on("foodList", this.createFoodList)
    $(document).on('click', '.food_div', this.addFoodtoBasket.bind(this))
    // $(document).on('click', '.food_div', basket.addFoodtoBasket.bind(basket))
  },

  // run at the end of initialize.js
  summonFood: function() {
   // on successful ajax request on the url within model, event is created and triggered resulting with json for FoodController to work with within initialize.js
    this.model.fetchFood()
  },
  createFoodList: function (e, json){
    this.allFoodResults = json
    console.log(this)
    console.log(this.allFoodResults, "this is json in controller")
  },
  addFoodtoBasket: function(e){
      //Visual
    console.log(e)
    console.log(this)
    $(e.currentTarget).addClass('basket')
    //Save to Database
    console.log(e.currentTarget.getElementsByTagName('li')[0].getAttribute('food-id'))
    console.log(this.allFoodResults)
  }
}
