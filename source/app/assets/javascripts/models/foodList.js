// run in FoodsController.js
function FoodList(url){
  // grabs url from model in controller
  this.url = url
}

FoodList.prototype = {
  // run in FoodsController.js
  fetchFood: function() {
    $.ajax({
      url: this.url,
      type: 'GET'})
      .done(function(json){
        new CustomEvent('foodList')
        $.event.trigger('foodList', json)
      })
    }
  }
