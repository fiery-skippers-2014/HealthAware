HA.Basket = function() {
  this.oldfoodarray = []
  this.goals = []
  this.progressArray = []
  this.progressObj = {}
}

Basket.prototype = {
	addFoodtoBasket: function(object){`
    this.saveFoodItemToDataBase(object)
  },
  // this is a bad name, save/create would be better. This also doesn't belong here, it belongs in a Food model.
  saveFoodItemToDataBase: function(object){
    $.ajax({
      url: '/foodos', //this should go to a baskets
      data: object,
      type: 'POST'
    })
    .done(function(data){
      this.oldfoodarray.push(data.food)
      $(this).trigger('oldList:updated');
    }.bind(this))
  },
  //Can we combine these to functions. Top is getting food back, bottom sucks. Basket is already in the top.
  retrieveFoodsFromDataBase: function(callback){
    var self = this
    $.ajax({
      url: '/baskets/0', // this should go to baskets#index
      type: 'GET'
    })
    .done(function(data){
      // this logic is a bit confusing
      if(data.basket !== null){
        self.oldfoodarray = data.basket
      }
      if(data.goals !== null){
        self.goals = data.goals
      }
      if(callback) { callback(); }
      $(this).trigger('oldList:updated')
    }.bind(this))
  },
  calculateTotals: function(){
    //Loop through your goals
    this.progressArray = []

    for (j=0; j < this.goals.length; j++){
      this.progressObj = {}
      API_variables = Object.keys(this.goals[j])
      API_food_name = API_variables[0]


      //Inner Loop through each food ...
      this.progressObj.current_amount = 0
      for (i=0; i < this.oldfoodarray.length; i++){
        if(this.oldfoodarray[i][API_food_name] !== ""){
          this.progressObj.current_amount += (parseFloat(this.oldfoodarray[i][API_food_name]))
        }
      }
      this.progressObj.name = this.goals[j].name
      this.progressObj.id = this.goals[j].id
      this.progressObj.unit = this.goals[j].unit
      this.progressObj.limit = this.goals[j].limit
      this.progressObj.target = this.goals[j][API_food_name]
      this.progressObj.percent = Math.round( (this.progressObj.current_amount/this.progressObj.target) * 100)

      this.progressArray.push(this.progressObj)
    }
  }
}
