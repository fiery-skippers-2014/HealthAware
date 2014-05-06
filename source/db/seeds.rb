Nutrient.create(name:"Protein", nf_name:"nf_protein", FDA_recommendation: 50, unit:"grams",FDA_limit:false)
Nutrient.create(name:"Total Fat", nf_name:"nf_total_fat", FDA_recommendation: 70,unit:"grams",FDA_limit:true)
Nutrient.create(name:"Total Carbohydrates", nf_name:"nf_total_carbohydrate", FDA_recommendation: 300,unit:"grams",FDA_limit:false)
Nutrient.create(name:"Saturated Fats", nf_name:"nf_saturated_fat", FDA_recommendation: 20,unit:"grams",FDA_limit:true)
Nutrient.create(name:"Calories", nf_name:"nf_calories",unit:"kcal", FDA_recommendation: 2000,FDA_limit:false)
Nutrient.create(name:"Monounsaturated Fats", nf_name:"nf_monounsaturated_fat", FDA_recommendation: 45,unit:"grams",FDA_limit:false)
Nutrient.create(name:"Trans Fats", nf_name:"nf_trans_fatty_acid", FDA_recommendation: 20,unit:"grams",FDA_limit:true)
Nutrient.create(name:"Polyunsaturated Fats", nf_name:"nf_polyunsaturated_fat", FDA_recommendation: 20,unit:"grams",FDA_limit:false)
Nutrient.create(name:"Sugars", nf_name:"nf_sugars", FDA_recommendation: 200,unit:"grams",FDA_limit:true)
Nutrient.create(name:"Iron", nf_name:"nf_iron_dv", FDA_recommendation: 40,unit:"milligrams",FDA_limit:false)
Nutrient.create(name:"Calcium", nf_name:"nf_calcium_dv", FDA_recommendation: 60,unit:"milligrams",FDA_limit:false)
Nutrient.create(name:"Fiber", nf_name:"nf_dietary_fiber", FDA_recommendation: 25,unit:"grams",FDA_limit:false)
Nutrient.create(name:"Sodium", nf_name:"nf_sodium", FDA_recommendation: 2400,unit:"milligrams",FDA_limit:true)
Nutrient.create(name:"Cholesterol", nf_name:"nf_cholesterol", FDA_recommendation: 300,unit:"milligrams",FDA_limit:true)


#Create 5 Food
Food.create(API: "51c3cb1497c3e6db4df96", item_name: "G, Lemonade", nf_protein: "0", nf_serving_size_qty: "12", nf_serving_size_unit: "fl oz", nf_total_carbohydrate: "21", nf_total_fat: "0", nf_ingredient_statement: "Water, Sucrose, Dextrose, Citric Acid, Natural and ...", nf_water_grams: "", nf_calories: "80", nf_saturated_fat: "", nf_monounsaturated_fat: "", nf_polyunsaturated_fat: "", nf_trans_fatty_acid: "", nf_cholesterol: "", nf_sodium: "160", nf_dietary_fiber: "", nf_sugars: "21", nf_vitamin_a_dv: "", nf_vitamin_c_dv: "", nf_calcium_dv: "", nf_iron_dv: "", nf_refuse_pct: "", nf_servings_per_container: "2.5", nf_serving_weight_grams: "362")
Food.create(API: "513fc9c4673c426000ca4", item_name: "Personal: C-P-H", nf_protein: "6.98", nf_serving_size_qty: "1", nf_serving_size_unit: "slice", nf_total_carbohydrate: "13.75", nf_total_fat: "4.67", nf_ingredient_statement: "", nf_water_grams: "", nf_calories: "123", nf_saturated_fat: "2.08", nf_monounsaturated_fat: "", nf_polyunsaturated_fat: "", nf_trans_fatty_acid: "0", nf_cholesterol: "11", nf_sodium: "290", nf_dietary_fiber: "1.1", nf_sugars: "2.03", nf_vitamin_a_dv: "", nf_vitamin_c_dv: "", nf_calcium_dv: "", nf_iron_dv: "", nf_refuse_pct: "", nf_servings_per_container: "", nf_serving_weight_grams: "")
Food.create(API: "513fc996927da08003be2", item_name: "Grilled Salmon - F&T", nf_protein: "44", nf_serving_size_qty: "1", nf_serving_size_unit: "serving", nf_total_carbohydrate: "9", nf_total_fat: "23", nf_ingredient_statement: "", nf_water_grams: "", nf_calories: "425", nf_saturated_fat: "", nf_monounsaturated_fat: "", nf_polyunsaturated_fat: "", nf_trans_fatty_acid: "", nf_cholesterol: "", nf_sodium: "1120", nf_dietary_fiber: "3", nf_sugars: "", nf_vitamin_a_dv: "", nf_vitamin_c_dv: "", nf_calcium_dv: "", nf_iron_dv: "", nf_refuse_pct: "", nf_servings_per_container: "", nf_serving_weight_grams: "")
Food.create(API: "513fc9c467bc26000d03", item_name: "Sarge: C-P-H", nf_protein: "33.6", nf_serving_size_qty: "1", nf_serving_size_unit: "slice", nf_total_carbohydrate: "74.2", nf_total_fat: "22.15", nf_ingredient_statement: "", nf_water_grams: "", nf_calories: "621", nf_saturated_fat: "9.7", nf_monounsaturated_fat: "", nf_polyunsaturated_fat: "", nf_trans_fatty_acid: "0.01", nf_cholesterol: "54", nf_sodium: "1336", nf_dietary_fiber: "5.1", nf_sugars: "10.09", nf_vitamin_a_dv: "", nf_vitamin_c_dv: "", nf_calcium_dv: "", nf_iron_dv: "", nf_refuse_pct: "", nf_servings_per_container: "", nf_serving_weight_grams: "")
Food.create(API: "51c357c3e69de4aff003", item_name: "Lebanon Bologna", nf_protein: "9", nf_serving_size_qty: "2", nf_serving_size_unit: "slices", nf_total_carbohydrate: "1", nf_total_fat: "4", nf_ingredient_statement: "Beef, Salt, Sugar, Dextrose, Spices, Lactic Acid St...", nf_water_grams: "", nf_calories: "80", nf_saturated_fat: "1", nf_monounsaturated_fat: "", nf_polyunsaturated_fat: "", nf_trans_fatty_acid: "0", nf_cholesterol: "25", nf_sodium: "660", nf_dietary_fiber: "", nf_sugars: "1", nf_vitamin_a_dv: "0", nf_vitamin_c_dv: "0", nf_calcium_dv: "0", nf_iron_dv: "4", nf_refuse_pct: "", nf_servings_per_container: "3.5", nf_serving_weight_grams: "")


user = User.new(username:"test", email:"test@gmail.com")
user.password = 'test'
user.save

#Create 7 Baskets
  (0..7).each do |y|
    basket = user.baskets.new
    basket.created_at=(Time.now - 86400*y).to_s
    basket.save
    10.times do
      BasketFood.create(basket_id: basket.id, food_id: Food.all.sample.id)
    end
  end

