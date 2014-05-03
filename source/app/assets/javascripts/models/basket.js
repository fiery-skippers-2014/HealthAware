function Basket(){
  this.oldfoodarray = []
  this.preferences
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
      self.preferences = data.goal
      new CustomEvent('oldList')
      $.event.trigger('oldList')
    })
  },
  calculateTotals: function(){
    console.log("this")
    console.log(this)
    console.log("basket")
    console.log(this.oldfoodarray)
  }
}