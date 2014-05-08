function GoalView(){
  this.search =  ".searched",
  this.foodTemplate =  "#food-template"
}

GoalView.prototype = {
  draw: function(json, foodTemplate){
    console.log(json)
    var source = foodTemplate.html()
    var template = Handlebars.compile(source)
    $('.searched').html(template(json))
  },

  getFieldsFromUserGoals: function(userGoals){
    var fieldsArray = [];
    for (i=0;i<userGoals.length;i++){
      fieldsArray.push(Object.keys(userGoals[i])[0]);
    };
    return fieldsArray;
  },

  grabValuesFromFoodItem: function(json, nutrientsToTrack){
    var fieldValueArray = [];
    for (i=0;i<nutrientsToTrack.length;i++){
      newObjLit = {
        fieldName : this.parseFieldName(nutrientsToTrack[i]),
        fieldValue : json.hits[h].fields[nutrientsToTrack[i]]
      }
      fieldValueArray.push(newObjLit)
    };
    return fieldValueArray;
  },

  makeHandlebarsObject: function(json, nutrientsToTrack){
    var arrayOfObjects = [];
    for (h=0;h<json.hits.length;h++){
      var nutrientNamesAndValuesPerFood = this.grabValuesFromFoodItem(json, nutrientsToTrack);
      var ourEachObject = {
        "foodId"      : json.hits[h]._id,
        "objName"     : json.hits[h].fields.item_name,
        "objBrandName": json.hits[h].fields.brand_name,
        "objFields"   : nutrientNamesAndValuesPerFood
      };
      arrayOfObjects.push(ourEachObject);
    };
    return arrayOfObjects;
  },

  prepareFoodListForView: function(e, json, goals, template){
    var nutrientsToTrack = this.getFieldsFromUserGoals(goals);
    var masterObjArray = this.makeHandlebarsObject(json, nutrientsToTrack);
    this.draw({ objects : masterObjArray }, $(template));
  },

  parseFieldName: function(oldFieldName){
    var makeRightCharUpper = function(match){
      return match.toUpperCase();
    };
    nfRemoved = oldFieldName.substr(2);
    capitalized = nfRemoved.replace(/_(\w)/g, makeRightCharUpper);
    underscoreToSpaces = capitalized.replace(/_/g, " ");
    return underscoreToSpaces.trim();
  }
}