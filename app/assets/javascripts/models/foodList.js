// I like putting logic like this in a collection object.
// run in FoodsController.js
function FoodList(url){
  // grabs url from model in controller
  this.url = url
}

FoodList.prototype = {
  // run in FoodsController.js
  fetchFood: function(queryData) {
    $.ajax({
      url: 'https://api.nutritionix.com/v1_1/search/',
      data: queryData,
      type: 'POST'})
      .done(function(json){
        new CustomEvent('foodList')
        $.event.trigger('foodList', json)
      })
    }
  }
