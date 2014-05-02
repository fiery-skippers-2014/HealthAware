function BasketList(){
	this.basket = []
}

BasketList.prototype = {
	addFoodtoBasket: function(object){
    this.basket.push(object)
  }
}


