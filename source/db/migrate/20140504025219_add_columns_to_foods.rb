class AddColumnsToFoods < ActiveRecord::Migration
  def change
  	add_column :foods, :nf_ingredient_statement, :string
  	add_column :foods, :nf_water_grams, :string
  	add_column :foods, :nf_calories, :string
  	add_column :foods, :nf_saturated_fat, :string
  	add_column :foods, :nf_monounsaturated_fat, :string
  	add_column :foods, :nf_polyunsaturated_fat, :string
  	add_column :foods, :nf_trans_fatty_acid, :string
  	add_column :foods, :nf_cholesterol, :string
  	add_column :foods, :nf_sodium, :string
  	add_column :foods, :nf_dietary_fiber, :string
  	add_column :foods, :nf_sugars, :string
  	add_column :foods, :nf_vitamin_a_dv, :string
  	add_column :foods, :nf_vitamin_c_dv, :string
  	add_column :foods, :nf_calcium_dv, :string
  	add_column :foods, :nf_iron_dv, :string
  	add_column :foods, :nf_refuse_pct, :string
  	add_column :foods, :nf_servings_per_container, :string
  	add_column :foods, :nf_serving_weight_grams, :string
  end
end
