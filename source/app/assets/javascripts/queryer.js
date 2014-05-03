queryMaker = function (foodType){
  this.foodType = foodType;
  this.appId = "c6626cb4";
  this.appKey = "efd276c977110710dbcc73b6ffbfc9dc";
  this.resultsBack = 6;
  this.defaultFields = ["item_name","item_name", "nf_serving_size_qty", "nf_serving_size_unit"];
  this.nutrientFields = ["nf_total_fat", "nf_protein", "nf_total_carbohydrate"];
  this.allFields = this.defaultFields.concat(this.nutrientFields);
}

queryMaker.prototype = {
  makeJson : function(){
    return {
      appId: this.appId,
      appKey: this.appKey,
      offset: 0,
      limit: this.resultsBack,
      fields: this.allFields,
      query: this.foodType
    }
  }
}
