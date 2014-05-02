function ApplicationController(cons) {
  // Defining controllers that are using methods through ApplicationController
  this.foodController = cons["foodController"]
}

ApplicationController.prototype = {
  bindListeners: function() {
    // draw handlebar template based on this model/view on "foodList" event
    this.foodController.bindFoodListeners()
  }
}
