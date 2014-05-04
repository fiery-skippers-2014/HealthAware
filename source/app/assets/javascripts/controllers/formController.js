function FormController(formView){
  this.formView = formView
}

FormController.prototype = {
  bindFormListerns: function(){
    var formView = this.formView
    $('#amount_custom').on('click', formView.makeCustomAmount.bind(this))
    $('#clicked_new_goal').on('click', this.createNewGoal)
    $(document).on('click', '.delete_goal', this.removeGoal)

  },
  createNewGoal: function(){
    $.ajax({
      url: '/goals',
      type: 'POST'
    })
    .done(function(json){
      console.log("need to render new goal here")
    })
  },
  removeGoal: function(){
    console.log('hi')
    var self = this
    debugger
     $.ajax({
      url: '/goals/'+self.id,
      type: 'DELETE'
    })
    .done(function(number){
      console.log(number)
      $('li'+' #'+number.goal+' ').remove()
    })
  }
}