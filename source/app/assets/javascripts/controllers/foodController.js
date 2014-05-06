function FoodController(model, Foodview, basket, basketView, Healthview){
  this.model = model
  this.view = Foodview
  this.basket = basket
  this.basketView = basketView
  this.healthView = Healthview
  this.allFoodResults = {}
};

FoodController.prototype = {
  // run in controllers/applicationController.js
  bindFoodListeners: function(){
    var food = this.model
    var foodView = this.view
    var basket = this.basket
    var basketView = this.basketView
    var healthView = this.healthView

    $(document).ready(basket.retrieveFoodsFromDataBase.bind(basket))
    $(document).on("oldList", this.printSavedBasket.bind(this))
    $(document).on("oldList", basket.calculateTotals.bind(basket))
    $(document).on("oldList", this.updateTotalsOnView.bind(this))
    $('#search-form').on('submit', this.searchFoods.bind(food))
    $(document).on("foodList", this.handleSearchResults.bind(this));
    $(document).on("foodList", this.createFoodList.bind(this))
    $(document).on('click', '.food_div', this.findFoodInSearchResults.bind(this))
    $(document).on('click', '.delete_food', this.removeFoodFromDataBase)
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


  handleSearchResults: function(e, json){
    FoodListView.prototype.prepareFoodListForView(e, json, this.basket.goals, this.view.foodTemplate);
  },


  findFoodInSearchResults: function(e){
    //Save to Database, make this nicer.....maybe a Basket Model
    food_id = e.currentTarget.getElementsByTagName('li')[0].getAttribute('food-id')
    for(x = 0; x < this.allFoodResults.hits.length; x++){
      if (this.allFoodResults.hits[x]._id === food_id){
        this.basket.addFoodtoBasket(this.allFoodResults.hits[x])
      }
    }
  },


  printSavedBasket: function(e){
    this.basketView.drawOldBasket(this.basket)
  },


  saveBasketToDataBase: function(e){
    this.basket.savetheBasketToDataBase()
  },

  updateTotalsOnView: function(e){  this.healthView.updateHealthStatsOnView(this.basket.progressArray)
  },

  removeFoodFromDataBase: function(){
     var self = this.id
     $.ajax({
      url: '/basket_foods/'+self,
      type: 'DELETE'
    })
    .done(function(number){
      $('li.basket-item_'+number).remove()
    })
  }
}
