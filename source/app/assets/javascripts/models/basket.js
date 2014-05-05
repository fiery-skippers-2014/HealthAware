function Basket(){
  this.oldfoodarray = []
  this.goals
  this.progressArray = []
  this.progressObj = {}
}

Basket.prototype = {
	addFoodtoBasket: function(object){
    this.saveFoodItemToDataBase(object)
  },
  saveFoodItemToDataBase: function(object){
    var self = this
    $.ajax({
      url: '/foods',
      data: object,
      type: 'POST'
    })
    .done(function(json){
      self.oldfoodarray.push(json)
      new CustomEvent('oldList')
      $.event.trigger('oldList')
    })
  },
  retrieveFoodsFromDataBase: function(){
    var self = this
    $.ajax({
      url: '/baskets/0',
      type: 'GET'
    })
    .done(function(data){
      if(data.basket !== null){
        self.oldfoodarray = data.basket
      }
      self.goals = data.goal
      new CustomEvent('oldList')
      $.event.trigger('oldList')
    })
  },
  calculateTotals: function(){
    //Loop through your goals
     this.progressArray = []
    for (j=0; j < this.goals.length; j++){
      this.progressObj = {}
      keys = Object.keys(this.goals[j])
      target = keys[0]
      this.progressObj[target] = 0

      // this.progress[fda] = 0
      //Inner Loop through each food ...
      for (i=0; i < this.oldfoodarray.length; i++){
        console.log(this.oldfoodarray[i][target])
        if(this.oldfoodarray[i][target] !== ""){
          this.progressObj[target] += (parseFloat(this.oldfoodarray[i][target]))
        }
      }
      // ... and calculate totals
      this.progressObj[target] = this.progressObj[target]
      this.progressObj[target+ " unit"] = this.goals[j].unit
      this.progressObj[target+ "_limit"] = this.goals[j].limit
      this.progressObj[target+ " %"] = this.progressObj[target]/this.goals[j][target]
      this.progressObj[target+ " id"] = this.goals[j].id
      this.progressObj[target+ " your_target"] = this.goals[j][target]
      this.progressArray.push(this.progressObj)
      debugger
      console.log(this.progressArray)
    }
  }
}
