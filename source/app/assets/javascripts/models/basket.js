function Basket(){
	this.basket = []
}

Basket.prototype = {
	addFoodtoBasket: function(object){
    this.basket.push(object)
    this.saveFoodItemToDataBase(object)
  },
  saveFoodItemToDataBase: function(object){
    $.ajax({

      url: '/foods',
      data: object,
      type: 'POST'
    })
    .done(function(json){
    })
  }
  // retrieveFoodsFromDataBase: function(){
  //   $.ajax({
  //     url: '/basket',
  //     type: 'GET'
  //   })
  //   .done(function(json){
  //     console.log(json)
  //   })
  // }
}


// 1)FoodController has all search Results
// 2)Clicked food becomes SelectedFood
//   i) Selected food saves to server in
//   ii) Basket contents comes back from server
//   iii) Print out basket server contents


