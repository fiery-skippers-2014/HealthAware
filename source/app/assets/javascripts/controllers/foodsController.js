// run in initialize.js
function FoodController(model, Foodview, basket, basketView){
  this.model = model // hard-coded url request (so far)
  this.view = Foodview // hash of elements important for food-template
  this.basket = basket
  this.basketView = basketView
  this.allFoodResults = {}
}

FoodController.prototype = {
  // run in controllers/applicationController.js
  bindFoodListeners: function(){
    var food = this.model
    var foodView = this.view
    var basket = this.basket
    var basketView = this.basketView
    // on foodsList event created within foodList model, create template with model's elements AKA foodView (because you are binding the function to foodView)
    $('#search-form').on('submit', this.searchFoods.bind(food))
    $(document).on("foodList", foodView.drawFoods.bind(foodView));
    $(document).on("foodList", this.createFoodList.bind(this))
    $(document).on('click', '.food_div', this.findFoodInSearchResults.bind(this))
    $(document).on('click', '.food_div', this.printOutBasket.bind(this))
    // $(document).on('click', '.food_div', this.saveBasketToDataBase.bind(this))
  },
  searchFoods: function (event){
    event.preventDefault();
    newQuery = new queryMaker(event.target["food-choice"].value)
    queryData = newQuery.makeJson()
    this.fetchFood(queryData)
  },
  createFoodList: function(e, json){
    this.allFoodResults = json
  },
  findFoodInSearchResults: function(e){
      //Visual
    //Save to Database, make this nicer.....maybe a Basket Model
    food_id = e.currentTarget.getElementsByTagName('li')[0].getAttribute('food-id')
    for(x = 0; x < this.allFoodResults.hits.length; x++){
      if (this.allFoodResults.hits[x]._id === food_id){
        this.basket.addFoodtoBasket(this.allFoodResults.hits[x])
        console.log(this.basket, "food added to basket")
      }
    }
  },
  printOutBasket: function(e){
    this.basketView.drawBasket(this.basket)
  },
  saveBasketToDataBase: function(e){
    this.basket.savetheBasketToDataBase()
  }
}
