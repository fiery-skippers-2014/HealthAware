function HealthView(healthElements){
  this.healthTemplate = healthElements["healthTemplate"]
  this.health = healthElements["health"]
}

HealthView.prototype = {
  updateHealthStatsOnView: function(progress){
    keys = Object.keys(progress)
    var source = $(this.healthTemplate).html()
    var template = Handlebars.compile(source)
    $(this.health).html(template(progress))
    debugger
  }
}