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
      console.log(data)
      if(data.basket !== null){
        self.oldfoodarray = data.basket
      }
      console.log(self)
      self.preferences = data.goal
      new CustomEvent('oldList')
      $.event.trigger('oldList')
    })
  },
  calculateTotals: function(){
    this.oldfoodarray
    this.preferences
    // (parseFloat(this.oldfoodarray[0].nf_protein))/this.preferences.protein * 100
  }
}