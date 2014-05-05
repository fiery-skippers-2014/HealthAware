function ApplicationController(allControllers) {
  // Defining controllers that are using methods through ApplicationController
  this.foodController = allControllers["foodController"]
  this.formController = allControllers["formController"]
}

ApplicationController.prototype = {
  bindListeners: function() {
    // draw handlebar template based on this model/view on "foodList" event
    this.foodController.bindFoodListeners()
    this.formController.bindFormListerns()
  }
}
