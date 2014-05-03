function Basket(){
	// this.newfoodarray = []
  this.oldfoodarray = []
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
      console.log(json)
      self.oldfoodarray.push(json)
      new CustomEvent('oldList')
      $.event.trigger('oldList')
    })
  },
  retrieveFoodsFromDataBase: function(){
    console.log(this)
    var self = this
    $.ajax({
      url: '/baskets/0',
      type: 'GET'
    })
    .done(function(data){
      console.log(data)
      self.oldfoodarray = data
      new CustomEvent('oldList')
      $.event.trigger('oldList')
    })
  }
}