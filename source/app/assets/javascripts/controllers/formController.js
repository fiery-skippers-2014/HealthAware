function FormController(formView){
  this.formView = formView
}

FormController.prototype = {
  bindFormListerns: function(){
    var formView = this.formView
    $('#amount_custom').on('click', formView.makeCustomAmount.bind(this))
    $('#clicked_new_goal').on('click', this.createNewGoal)
  },
  createNewGoal: function(){
    $.ajax({
      url: '/goals',
      type: 'POST'
    })
    .done(function(json){
      console.log("need to render new goal here")
    })
  }
}