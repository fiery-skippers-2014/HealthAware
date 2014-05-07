function FormController(formView){
  this.formView = formView
  this.lastweek = {}
}

FormController.prototype = {
  bindFormListerns: function(){
    var formView = this.formView
    $(document).on(
      'click', '.delete_goal', this.removeGoal)
    $(document).on(
      'click','#amount_custom', formView.makeCustomAmount.bind(this))
    $(document).on(
      'click',"#clicked_new_goal",this.createNewGoal)
  },
  createNewGoal: function(e){
    e.preventDefault()
    object =  $('#new_goal').serialize()
    $.ajax({
      url: '/goals',
      data:object,
      type: 'POST'
    })
    .success(function(json){
      $("#new_goal").html(json);
    })
  },
  removeGoal: function(){
    var self = this
    $.ajax({
      url: '/goals/'+self.id,
      type: 'DELETE'
    })
    .done(function(number){
      $('li.single-track_'+number.goal).remove()
    })
  }
}
