function FoodListView(foodElements){
  this.container = foodElements["container"]
  this.foodTemplate = foodElements["foodTemplate"]
}

FoodListView.prototype = {
  drawFoods: function(json, foodTemplate){
    console.log(json)
    var source = foodTemplate.html()
    var template = Handlebars.compile(source)
    $('.searched').html(template(json))
  },
  prepareFoodListForView: function(e, json, goals, template){  //!!!!move this to foodListView!!!!
    goodFields = [];
    // goalObjArray = this.basket.goals;
    goalObjArray = goals;
    debugger
    for (i=0;i<goalObjArray.length;i++){
      goodFields.push(Object.keys(goalObjArray[i])[0]);
    }
    var ourMasterObject = {};
    var masterObjArray = [];

    for (h=0;h<json.hits.length;h++){    //gives us each returned object
      var fieldValueArray = [];
      for (i=0;i<goodFields.length;i++){
        currentGoodField = goodFields[i];
        newObjLit = {
          fieldName : this.parseFieldName(currentGoodField),
          fieldValue : json.hits[h].fields[goodFields[i]]
        }
        fieldValueArray.push(newObjLit)
        // ourObject[goodFields[i]] = json.hits[h].fields[goodFields[i]]
      }
      var ourEachObject = {};
      ourEachObject.foodId = json.hits[h]._id;
      ourEachObject.objName = json.hits[h].fields.item_name;
      ourEachObject.objBrandName = json.hits[h].fields.brand_name;
      ourEachObject.objFields = fieldValueArray;
      masterObjArray.push(ourEachObject);
    }
    console.log({objects:masterObjArray});
    this.drawFoods({ objects : masterObjArray }, $(template));
  },
  parseFieldName: function(oldFieldName){
    nfRemoved = oldFieldName.substr(2);
    function makeRightCharUpper(match){
      return match.toUpperCase();
    };
    capitalized = nfRemoved.replace(/_(\w)/g, makeRightCharUpper);
    underscoreToSpaces = capitalized.replace(/_/g, " ");
    return underscoreToSpaces.trim();
  }
}