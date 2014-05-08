// run in FoodsController.js
function Food(url){
  // grabs url from model in controller
  this.url = url
}

Food.prototype = {
  // run in FoodsController.js
  fetch: function(queryData) {
    $.ajax({
      url: 'https://api.nutritionix.com/v1_1/search/',
      data: queryData,
      type: 'POST'})
      .done(function(json){
        $(this).trigger('foodList', json)
      }.bind(this))
    }
  }
