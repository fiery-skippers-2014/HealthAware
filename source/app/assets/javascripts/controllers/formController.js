function FormController(formView){
  this.formView = formView
}

FormController.prototype = {
  bindFormListerns: function(){
    var formView = this.formView
    $(document).on('click','#amount_custom', formView.makeCustomAmount.bind(this))
    $(document).on('click',"#clicked_new_goal",this.createNewGoal)
    // $('#addgoals').on('click',this.newgoal)
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
      data: object,
      type: 'POST'
    })
    .done(function(json){
      console.log("got here")
      $("#new_goal").html(json);
    })

  }
}