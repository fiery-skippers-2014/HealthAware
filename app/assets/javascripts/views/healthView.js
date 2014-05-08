function HealthView(healthElements){
  // move them into private methods.
  this.healthTemplate = healthElements["healthTemplate"]
  this.health = healthElements["health"]
}

HealthView.prototype = {
  updateHealthStatsOnView: function(goalStatus){
    var source = $(this.healthTemplate).html()
    var minOrMax = "";
    currentGoals = []

    for(i=0; i<goalStatus.length; i++){
      percentage = goalStatus[i].percent
      displayPercentage = percentage.toString() + "%";
      var failureMessage = ""
      var successMessage = ""

      if (goalStatus[i].limit === true){
        minOrMax = "maximum"
      } else {
        minOrMax = "minimum"
      };

      if (percentage > 100){
        if (minOrMax == "minimum"){
          successMessage = "You reached your goal today!"
        }
        else {
          failureMessage = "You missed your goal today, Try to eat healthier tomorrow!"
        }
      };

      singleGoal = {
        name: goalStatus[i].name,
        total: Math.round(goalStatus[i].current_amount),
        unit: goalStatus[i].unit,
        limit: minOrMax,
        percentage: displayPercentage,
        failure: failureMessage,
        success: successMessage,
        id: goalStatus[i].id,
        target: goalStatus[i].target,
        bar: this.createBar(percentage, goalStatus[i].limit)
      };
      currentGoals.push(singleGoal);
    }

    var allThings = { allGoals: currentGoals }
    var template=Handlebars.compile(source)

    $(this.health).html(template(allThings))
    this.addBar(currentGoals)
    this.activateFirstTab(currentGoals)
    this.drawChart()
    $(document).foundation()
  },


  activateFirstTab: function(currentGoals){
    var id = currentGoals[0].id;
    var tabAndPanel = 'dd[data-tabid='+id+'], #panel-'+id;
    $(tabAndPanel).addClass('active');
  },


  createBar: function(percentage, limit){
    var ourDOM = $('<div class="barandgrowth"></div>')
    var buffering = $('<div class="buffering"></div>')
    if (limit == false){

      if (percentage <= 35){
        ourDOM.addClass("red_bar");
      }
      else if (percentage >= 75){
        ourDOM.addClass("green_bar");
      }
      else {
        ourDOM.addClass("yellow_bar");
      }
    }
    else {
      if (percentage <= 35){
        ourDOM.addClass("green_bar");
      }
      else if (percentage >= 75){
        ourDOM.addClass("red_bar");
      }
      else{
        ourDOM.addClass("yellow_bar");
      }
    }
    ourDOM[0].style.maxWidth = percentage.toString() + "%";
    ourDOM.append(buffering)
    return ($(ourDOM[0])[0]);
  },


  addBar: function(currentGoals){
    for(i=0; i<currentGoals.length; i++){
      if (currentGoals[i].limit == "maximum")
        {$('div#bar_'+currentGoals[i].id+'.bar').addClass('reach');}
      else
        {$('div#bar_'+currentGoals[i].id+'.bar').addClass('limit');}
      $('div#bar_'+currentGoals[i].id).append(currentGoals[i].bar)
    }
  },


  drawChart: function(){
    $.ajax({
      url: '/users/chart',
      type: 'GET'
    })
    .done(function(data){

      //Draw Limit Badges
      var source = $('#badge-template').html()
      var template = Handlebars.compile(source)
      $('.all_badges').html(template(data))


      for(i=0; i < data.series.length; i++){

        //Change Limits
        if (data.series[i].limit == false){
          var color ='green'
          var text = 'your target'
        } else {
          var color = 'red'
          var text = 'your limit'
        }

        //Change Maximums
        var target = data.series[i].target
        max_value = 0
        for(j=0; j < data.series[i].data.length; j++){
          if(max_value < data.series[i].data[j]){
            max = data.series[i].data[j] * 1.01
          }
        }

        if(target > max){
          max = target * 1.01
        }

        $('#js_container_'+data.series[i].id).highcharts({
          chart: {
            type: 'line',
          },
          title: {
            text: data.series[i].name +' Stats',
            x: -20
          },
          subtitle: {
            text: "",
            x: -20
          },
          xAxis: data.xAxis,
          yAxis: {
            title: {
              text: data.series[i].unit + '  consumed'
            },
            min: 0,
            max: max,
            plotLines : [{
              value : data.series[i].target,
              color : color,
              dashStyle : 'shortdash',
              width : 2,
              label : {
                text : text
              }
            }]
          },
          // legend: {
          //   layout: 'vertical',
          //   align: 'right',
          //   verticalAlign: 'middle',
          //   borderWidth: 0
          // },
          plotOptions: {
            line: {
              dataLabels: {
                enabled: true
              },
              enableMouseTracking: true
            }
          },
          series: [data.series[i]]
          })
        }
      })
    }
  }
