function Basket(){
  this.oldfoodarray = []
  this.goals = []
  this.progressArray = []
  this.progressObj = {}
}

Basket.prototype = {
	addFoodtoBasket: function(object){
    this.saveFoodItemToDataBase(object)
  },
  saveFoodItemToDataBase: function(object){
    $.ajax({
      url: '/foods',
      data: object,
      type: 'POST'
    })
    .done(function(data){
      this.oldfoodarray.unshift(data.food)
      $(this).trigger('update_basket')
    }.bind(this))
  },

  retrieveFoodsFromDataBase: function(){
    $.ajax({
      url: '/baskets',
      type: 'GET'
    })
    .done(function(data){
      if(data.basket !== null){
        this.oldfoodarray = data.basket.reverse()
      }
      if(data.goals !== null){
        this.goals = data.goals
      }
      $(this).trigger('update_basket')
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
