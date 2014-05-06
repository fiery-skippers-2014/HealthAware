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
    // $(document).ready(this.drawChart())
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
    e.preventDefault()
    object =  $('#new_goal').serialize()
    console.log(object)
=======
   object =  $('#new_goal').serialize()
>>>>>>> 9093b6b01e2b0cbdc93b404e07b1ebe626c4064b
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
      $('div #'+number.goal).remove()
    })
  }
  // drawChart: function(){
  //   $.ajax({
  //     url: '/basket_foods/0',
  //     type: 'GET'
  //   })
  //   .done(function(data){
  //     debugger
  //     $('.Protein').append(
  //     $('#js_container').highcharts({
  //       chart: {
  //           type: 'line'
  //       },
  //       title: {
  //           text: 'Food Stats for Last Week'
  //       },
  //       subtitle: {
  //           text: 'eat smarter'
  //       },
  //       xAxis: data.xAxis,
  //       yAxis: {
  //           title: {
  //               text: 'Grams consumed'
  //           },
  //           min: 0
  //       },
  //       plotOptions: {
  //           line: {
  //               dataLabels: {
  //                   enabled: true
  //               },
  //               enableMouseTracking: true
  //           }
  //       },
  //       series: [data.series[0]]
  //     }))
  //     $('#js_container1').highcharts({
  //       chart: {
  //           type: 'line'
  //       },
  //       title: {
  //           text: 'Food Stats for Last Week'
  //       },
  //       subtitle: {
  //           text: 'eat smarter'
  //       },
  //       xAxis: data.xAxis,
  //       yAxis: {
  //           title: {
  //               text: 'Grams consumed'
  //           },
  //           min: 0
  //       },
  //       plotOptions: {
  //           line: {
  //               dataLabels: {
  //                   enabled: true
  //               },
  //               enableMouseTracking: true
  //           }
  //       },
  //       series: [data.series[1]]
  //     })
  //      $('#js_container2').highcharts({
  //       chart: {
  //           type: 'line'
  //       },
  //       title: {
  //           text: 'Food Stats for Last Week'
  //       },
  //       subtitle: {
  //           text: 'eat smarter'
  //       },
  //       xAxis: data.xAxis,
  //       yAxis: {
  //           title: {
  //               text: 'Grams consumed'
  //           },
  //           min: 0
  //       },
  //       plotOptions: {
  //           line: {
  //               dataLabels: {
  //                   enabled: true
  //               },
  //               enableMouseTracking: true
  //           }
  //       },
  //       series: [data.series[2]]
  //     })
  //   })

}
