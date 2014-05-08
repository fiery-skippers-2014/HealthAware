class Food < ActiveRecord::Base
  attr_accessible :API, :nf_serving_size_qty, :item_name, :nf_serving_size_unit, :nf_total_fat, :nf_protein, :nf_total_carbohydrate, :nf_ingredient_statement, :nf_water_grams, :nf_calories, :nf_saturated_fat, :nf_monounsaturated_fat, :nf_polyunsaturated_fat, :nf_trans_fatty_acid, :nf_cholesterol, :nf_sodium, :nf_dietary_fiber, :nf_sugars, :nf_vitamin_a_dv, :nf_vitamin_c_dv, :nf_calcium_dv, :nf_iron_dv, :nf_refuse_pct, :nf_servings_per_container, :nf_serving_weight_grams
  has_many :basket_foods
  has_many :baskets, through: :basket_foods

  validates_uniqueness_of :API

  def self.create_or_find_existing_food(fields, id)
    if self.find_by_API(id)
      self.find_by_API(id)
    else
      self.create(fields)
    end
  end

end