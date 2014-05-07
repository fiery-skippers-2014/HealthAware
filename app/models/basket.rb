class Basket < ActiveRecord::Base
  attr_accessible :basket_id, :user_id

  has_many :basket_foods
  has_many :foods, through: :basket_foods
end