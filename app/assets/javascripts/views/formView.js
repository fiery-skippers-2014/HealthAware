function FormView(formElements){
    this.customLimit = formElements["customLimit"]
    this.amountLimit = formElements["amountCustom"]
}

FormView.prototype = {
  makeCustomAmount: function(){
    $('#custom_limit').toggle('slow')
  }
}