function ApplicationController(allControllers) {
  this.foodController = allControllers["foodController"]
  this.formController = allControllers["formController"]
}

ApplicationController.prototype = {
  bindListeners: function() {
    this.foodController.bindFoodListeners()
    this.formController.bindFormListerns()
  }
}
