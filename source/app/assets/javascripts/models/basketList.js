function Basket(){
	this.basket = []
}

Basket.prototype = {
	addFoodtoBasket: function(object){
    this.basket.push(object)
  },
  saveBasketToDataBase: function(){
    $.ajax({
      url: '/home/create',
      data: this.basket,
      type: 'POST'})
      .done(function(json){
        console.log('database save successful')
      })
    }
  }



// 1)FoodController has all search Results
// 2)Clicked food becomes SelectedFood
//   i) Selected food saves to server in
//   ii) Basket contents comes back from server
//   iii) Print out basket server contents


