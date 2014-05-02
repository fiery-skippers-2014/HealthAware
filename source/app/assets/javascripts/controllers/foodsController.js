// run in initialize.js
function FoodController(model, view, basket){
  this.model = model // hard-coded url request (so far)
  this.view = view // hash of elements important for food-template
  this.basket = basket
  this.allFoodResults = {}
}

FoodController.prototype = {
  // run in controllers/applicationController.js
  bindFoodListeners: function(){
    var food = this.model
    var foodView = this.view
    var basket = this.basket
    // on foodsList event created within foodList model, create template with model's elements AKA foodView (because you are binding the function to foodView)
    $(document).on("foodList", foodView.drawFoods.bind(foodView));
    $('#search-form').on('submit', this.searchFoods.bind(food))
    $(document).on("foodList", this.createFoodList.bind(this))
    $(document).on('click', '.food_div', this.addFoodtoBasket.bind(this))
  },

  searchFoods: function (event){
    event.preventDefault();
    newQuery = new queryMaker(event.target["food-choice"].value)
    queryData = newQuery.makeJson()
    this.fetchFood(queryData)
    // $(document).on('click', '.food_div', basket.addFoodtoBasket.bind(basket))
  },

  // run at the end of initialize.js
  summonFood: function() {
   // on successful ajax request on the url within model, event is created and triggered resulting with json for FoodController to work with within initialize.js
    this.model.fetchFood()
  },
  createFoodList: function(e, json){
    this.allFoodResults = json
  },
  prepareFoodListForView: function(fieldsWeWant, json){
    var goodFields = fieldsWeWant;
    var fullObject = json;

    Handlebars.registerHelper('fieldsToShow', function(json){
      return stuffwewant;
    })



  }

  addFoodtoBasket: function(e){
      //Visual
    $(e.currentTarget).addClass('basket')
    //Save to Database, make this nicer.....maybe a Basket Model
    food_id = e.currentTarget.getElementsByTagName('li')[0].getAttribute('food-id')
    for(x = 0; x < this.allFoodResults.hits.length; x++){
        if (this.allFoodResults.hits[x]._id === food_id){
          this.basket.addFoodtoBasket(this.allFoodResults.hits[x])
          console.log(this.basket)
        }
      }
  }
  // run at the end of initialize.js
  // summonFood: function() {
  //  // on successful ajax request on the url within model, event is created and triggered resulting with json for FoodController to work with within initialize.js
  //   this.model.fetchFood()
  // }
}
