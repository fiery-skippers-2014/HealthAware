function HealthView(healthElements){
  this.healthTemplate = healthElements["healthTemplate"]
  this.health = healthElements["health"]
}

HealthView.prototype = {
  updateHealthStatsOnView: function(progress){
    var source = $(this.healthTemplate).html()
    // allObjects = {}
    var minOrMax = "minimum";
    iteratively = []
    for(i=0;i<progress.length;i++){
      keys = Object.keys(progress[i])

      if (progress[i][keys[2]] === true){
        minOrMax = "maximum"
      };
      percentage = Math.round(progress[i][keys[3]] * 100)
      displayPercentage = percentage.toString() + "%";
      var failureMessage = ""
      var successMessage = ""
      if (percentage > 100){
        if (minOrMax == "minimum"){
          successMessage = "Success!"
        }
        else {
          failureMessage = "Too much! Try to eat healthier tomorrow!"
        }
      };

      ourObj = {
          name: this.parseHealthViewName(keys[i]),

          total: Math.round(progress[i][keys[0]]),
          unit: progress[i][keys[1]],
          limit: minOrMax,
          percentage: displayPercentage,
          failure: failureMessage,
          success: successMessage,
          id: progress[i][keys[4]],
          target: progress[i][keys[5]],
          bar: this.createBar(progress[i][keys[3]], progress[i][keys[2]])
      };
      debugger
      iteratively.push(ourObj);
    }
    allThings = { ourArray : iteratively }
    var template = Handlebars.compile(source)
    $(this.health).html(template(allThings))
    this.addBar(iteratively)
    this.drawChart()

    $(document).foundation()
  },

  addActiveTab: function(iteratively){

    for(i=0; i<iteratively.length; i++){
      if (i == 0) {
        $('li.tab').addClass('active');
        $('div#tab-pane').addClass('active');
        }
      }
    },

  addBar: function(iteratively){

    for(i=0; i<iteratively.length; i++){
      if (iteratively[i].limit == "maximum")
        {$('div#bar_'+iteratively[i].id+'.bar').addClass('reach');}
      else
        {$('div#bar_'+iteratively[i].id+'.bar').addClass('limit');}
      $('div#bar_'+iteratively[i].id).append(iteratively[i].bar)
    }
  },


  createBar: function(decimal, limit){
    percentage = Math.round(decimal * 100)

    var barBackground = $('')
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


  parseHealthViewName: function(oldFieldName){
    nfRemoved = oldFieldName.substr(2);
    function makeRightCharUpper(match){
      return match.toUpperCase();
    };
    capitalized = nfRemoved.replace(/_(\w)/g, makeRightCharUpper);
    underscoreToSpaces = capitalized.replace(/_/g, " ");
    trimmed = underscoreToSpaces.trim();
    trimmedArray = trimmed.split(" ");
    lastWord = trimmedArray.pop();
    if (lastWord != "unit" && lastWord != "Limit" && lastWord != "Dv"){
      trimmedArray.push(lastWord);
    };
    return trimmedArray.join(" ");
  },


  drawChart: function(){
    $.ajax({
      url: '/basket_foods/0',
      type: 'GET'
    })
    .done(function(data){
      for(i=0; i < data.series.length; i++){
        $('#js_container_'+data.series[i].id).highcharts({
          chart: {
            type: 'line',
            spacingTop: 3,
            spacingRight: 0,
            spacingBottom: 3,
            spacingLeft: 0
          },
          title: {
            text: data.series[i].name +' Stats for Last Week'
          },
          subtitle: {
            text: 'eat smarter'
          },
          xAxis: data.xAxis,
          yAxis: {
            title: {
              text: 'Grams consumed'
            },
            min: 0
          },
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
        // $(window).resize(function() {
        //   chart.setSize(
        //     $(document).width()/2,
        //     $(document).height()/2,
        //     false
        //   );
        // });

        // debugger
        // var chart = $('#js_container_'+data.series[i].id).highcharts().setSize(300, 300, true);
        // debugger
        // $('.resizer').resizable({
          // On resize, set the chart size to that of the
          // resizer minus padding. If your chart has a lot of data or other
          // content, the redrawing might be slow. In that case, we recommend
          // that you use the 'stop' event instead of 'resize'.
          // resize: function() {
          //   chart.setSize(
          //     this.offsetWidth - 20,
          //     this.offsetHeight - 20,
          //     false
          //   );
          // }
        // });
      }
    })
  }
}
