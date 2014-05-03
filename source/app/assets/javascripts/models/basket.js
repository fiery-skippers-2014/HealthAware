function Basket(){
  this.oldfoodarray = []
  this.goals
  this.progress = {}
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
      debugger
    for (j=0; j < this.goals.length; j++){
      keys = Object.keys(this.goals[j])
      target = keys[0]
      fda = keys[2]
      this.progress[target] = 0
      this.progress[fda] = 0
      //Inner Loop through each food ...
      for (i=0; i < this.oldfoodarray.length; i++){
        console.log(this.oldfoodarray[i][target])
        if(this.oldfoodarray[i][target] !== ""){
          this.progress[target] += (parseFloat(this.oldfoodarray[i][target]))
        }
      }
      // ... and calculate totals
      this.progress[target] = this.progress[target]/this.goals[j][target] * 100
      this.progress[fda] = this.progress[target]/this.goals[j][fda] * 100
    }
  }
}