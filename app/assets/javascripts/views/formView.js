function FormView(){
  this.customLimit =  "#custom_limit",
  this.user_form = "#user-forms"
}

FormView.prototype = {
  makeCustomAmount: function(){
    $('#custom_limit').toggle('slow')
  }
}