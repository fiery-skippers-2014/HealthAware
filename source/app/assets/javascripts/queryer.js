queryMaker = function (foodType){
  this.foodType = foodType;
  this.appId = "c6626cb4";
  this.appKey = "efd276c977110710dbcc73b6ffbfc9dc";
  this.resultsBack = 10;
  this.defaultFields = ["item_name","item_name","brand_name"];
  this.nutrientFields = ["nf_total_fat", "nf_protein", "nf_total_carbohydrate", "nf_ingredient_statement", "nf_water_grams", "nf_calories", "nf_saturated_fat", "nf_monounsaturated_fat", "nf_polyunsaturated_fat", "nf_trans_fatty_acid", "nf_cholesterol", "nf_sodium", "nf_dietary_fiber", "nf_sugars", "nf_vitamin_a_dv", "nf_vitamin_c_dv", "nf_calcium_dv", "nf_iron_dv", "nf_refuse_pct", "nf_servings_per_container", "nf_serving_size_qty", "nf_serving_size_unit", "nf_serving_weight_grams"]
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
