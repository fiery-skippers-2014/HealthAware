class Food < ActiveRecord::Base
  attr_accessible :API, :nf_protein, :nf_serving_size_qty, :nf_total_carbohydrate, :nf_total_fat, :item_name, :nf_serving_size_unit

  has_many :basket_foods
  has_many :baskets, through: :basket_foods

  validates_uniqueness_of :API






end