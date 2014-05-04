function FormController(formView){
  this.formView = formView
}

FormController.prototype = {
  bindFormListerns: function(){
    var formView = this.formView
    $('#amount_custom').on('click', formView.makeCustomAmount.bind(this))

  }
}