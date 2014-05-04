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
  // newgoal: function(){
  //   object =  $('#new_user').serialize()
  //   $.ajax({
  //     url:'/users'
  //     data:object,
  //     type:'POST'
  //   })
  //   .done(function(){
  //     console.log("yay")
  //     e.preventdefault
  //   })
  // },
  createNewGoal: function(e){
   object =  $('#new_goal').serialize()
   console.log("to start")
    console.log(object)
    $.ajax({
      url: '/goals',
      type: 'POST'
    })
    .done(function(json){
      console.log("got here")
      $("#new_goal").html(json);
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
