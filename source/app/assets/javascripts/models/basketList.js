function BasketList(){
	this.basket = []
}

BasketList.prototype = {
	addFoodtoBasket: function(){
      //Visual

    console.log(this)
    // $(e.currentTarget).addClass('basket')
    //Save to Database
    // console.log(e.currentTarget.getElementsByTagName('li')[0].getAttribute('food-id'))
    console.log(this.allFoodResults)
  }
}


