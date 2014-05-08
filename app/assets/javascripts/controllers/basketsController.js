function BasketsController(options){
  this.search = options["search"]
  this.basket = options["basket"]
  this.basketView = options["basketView"]
  this.goalView = options["goalView"]
  this.healthView = options["healthView"]
  this.allFoodResults = {}
};

BasketsController.prototype = {
  bindEvents: function(){
    var search = this.search
    var basket = this.basket
    var basketView = this.basketView
    var goalView = this.goalView
    var healthView = this.healthView

    basket.retrieveFoodsFromDataBase();
    $(basket).on("update_basket", this.printSavedBasket.bind(this))
    $(basket).on("update_basket", basket.calculateTotals.bind(basket))
    $(basket).on("update_basket", this.updateTotalsOnView.bind(this))
    $(basket).on('refresh_bar', basket.retrieveFoodsFromDataBase.bind(basket))
    $(document).on('refresh_goals', basket.retrieveFoodsFromDataBase.bind(basket))
    $('#search-form').on('submit', this.searchFoods.bind(search))
    $(search).on("foodList", this.handleSearchResults.bind(this));
    $(search).on("foodList", this.createFoodList.bind(this))
    $(goalView.search).on('click', '.food_div', this.findFoodInSearchResults.bind(this))
    $(basketView.basket).on('click', '.delete_food', this.removeFoodFromDataBase.bind(basket))
  },

  searchFoods: function (event){
    event.preventDefault();
    newQuery = new queryMaker(event.target["food-choice"].value)
    queryData = newQuery.makeJson()
    this.fetch(queryData)
  },

  createFoodList: function(e, json){
    this.allFoodResults = json
  },

  handleSearchResults: function(e, json){
    this.goalView.prepareFoodListForView(e, json, this.basket.goals, this.goalView.foodTemplate);
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
    this.basketView.draw(this.basket)
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
      $(this).trigger('refresh_bar')
    }.bind(this))
  }
}
