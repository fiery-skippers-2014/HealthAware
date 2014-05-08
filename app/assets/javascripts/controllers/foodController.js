function FoodController(options){
  this.model = options["model"]
  this.view = options["Foodview"]
  // why does the food controller need to know about basket?
  this.basket = options["basket"]
  this.basketView = options["basketView"]
  this.healthView = options["Healthview"]
  this.allFoodResults = {}
};

FoodController.prototype = {
  // run in controllers/applicationController.js
  // keep naming consistent, call it bindEvents
  bindFoodListeners: function(){
    var food = this.model
    var foodView = this.view
    var basket = this.basket
    var basketView = this.basketView
    var healthView = this.healthView

    basket.retrieveFoodsFromDataBase();
    $(basket).on("oldList:updated", this.printSavedBasket.bind(this))
    $(basket).on("oldList:updated", basket.calculateTotals.bind(basket))
    $(basket).on("oldList:updated", this.updateTotalsOnView.bind(this))
    $(document).on('refreshBarOnDelete', basket.retrieveFoodsFromDataBase.bind(basket))
    $('#search-form').on('submit', this.searchFoods.bind(food))
    $(document).on("foodList", this.handleSearchResults.bind(this));
    $(document).on("foodList", this.createFoodList.bind(this))
    $(document).on('click', '.food_div', this.findFoodInSearchResults.bind(this))
    $(document).on('click', '.delete_food', this.removeFoodFromDataBase.bind(basket))
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

  updateTotalsOnView: function(e){
    this.healthView.updateHealthStatsOnView(this.basket.progressArray)
  },

  removeFoodFromDataBase: function(e, basket){
     idToDelete = e.target.id
     $.ajax({
      url: '/foods/'+idToDelete,
      type: 'DELETE'
    })
    .done(function(number){
      $('div.basket-item_'+number).first().remove()

      new CustomEvent('refreshBarOnDelete')
      $.event.trigger('refreshBarOnDelete')
      HealthView.prototype.drawChart();
    })
  }
}
