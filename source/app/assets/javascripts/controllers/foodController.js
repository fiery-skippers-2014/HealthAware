// run in initialize.js
function FoodController(model, Foodview, basket, basketView, Healthview){
  this.model = model // contains uri for api search call and fetchFood() which creates, via ajax, a foodList event with json objects
  this.view = Foodview // knows searched elements and has ability to create a view based on a handlebar template
  this.basket = basket // a Basket model which knows a currently empty search, user's goals, and an empty progress object
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
    // on foodsList event created within foodList model, create template with model's elements AKA foodView (because you are binding the function to foodView)
    $(document).ready(basket.retrieveFoodsFromDataBase.bind(basket)) //
    $(document).on("oldList", this.printSavedBasket.bind(this))
    $(document).on("oldList", basket.calculateTotals.bind(basket))
    $(document).on("oldList", this.updateTotalsOnView.bind(this))
    $('#search-form').on('submit', this.searchFoods.bind(food))
    $(document).on("foodList", this.prepareFoodListForView.bind(this));
    $(document).on("foodList", this.createFoodList.bind(this))
    $(document).on('click', '.food_div', this.findFoodInSearchResults.bind(this))
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
  prepareFoodListForView: function(e, json){
    goodFields = [];
    goalObjArray = this.basket.goals;
    for (i=0;i<goalObjArray.length;i++){
      goodFields.push(Object.keys(goalObjArray[i])[0]);
    }
    var ourMasterObject = {};
    var masterObjArray = [];

    for (h=0;h<json.hits.length;h++){    //gives us each returned object
      var fieldValueArray = [];
      for (i=0;i<goodFields.length;i++){
        currentGoodField = goodFields[i];
        newObjLit = {
          fieldName : currentGoodField,
          fieldValue : json.hits[h].fields[goodFields[i]]
        }
        fieldValueArray.push(newObjLit)
        // ourObject[goodFields[i]] = json.hits[h].fields[goodFields[i]]
      }
      var ourEachObject = {};
      ourEachObject.foodId = json.hits[h]._id;
      ourEachObject.objName = json.hits[h].fields.item_name;
      ourEachObject.objBrandName = json.hits[h].fields.brand_name;
      ourEachObject.objFields = fieldValueArray;
      masterObjArray.push(ourEachObject);
    }
    console.log({objects:masterObjArray});
    debugger
    FoodListView.prototype.drawFoods({ objects : masterObjArray }, $('#food-template'));
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
  }
}
