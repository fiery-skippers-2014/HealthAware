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
    $(document).ready(this.drawChart())
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
    console.log("wtf")
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
    console.log('hi')
    var self = this
     $.ajax({
      url: '/goals/'+self.id,
      type: 'DELETE'
    })
    .done(function(number){
      $('div #'+number.goal).remove()
    })
  },
  drawChart: function(){
    $.ajax({
      url: '/basket_foods/0',
      type: 'GET'
    })
    .done(function(data){
      $('#js_container').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Food Stats for Last Week'
        },
        subtitle: {
            text: 'eat smarter'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: true
            }
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
      })
    })
  }
}
