var FormController = (function(){
  var controller = function(formView) {
    this.formView = formView;
    this.lastweek = {};
    _bindFormListerns();
  }
  var _bindFormListerns = function(){
    var formView = this.formView
    $(document).on(
      'click', '.delete_goal', this.removeGoal)
    $(document).on(
      'click','#amount_custom', formView.makeCustomAmount.bind(this))
    $(document).on(
      'click',"#clicked_new_goal",this.createNewGoal)
  },
  return controller;
}())

FormController.prototype = {
  // move those to private methods. This controller has no public api
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
      deleted_track_id = number.goal

      if(number.other_goals[0] != null){
        new_active_track_id = number.other_goals[0].id
      }
      $('li.single-track_'+deleted_track_id).remove()
      $('dd[data-tabid='+deleted_track_id+']').remove()

      var new_tabAndPanel = 'dd[data-tabid='+new_active_track_id+'], #panel-'+new_active_track_id;

      $(new_tabAndPanel).addClass('active');
    })
  }
}
