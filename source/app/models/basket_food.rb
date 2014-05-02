class BasketFood < ActiveRecord::Base
  attr_accessible :food_id, :basket_id, :quantity

  belongs_to :basket
  belongs_to :food
end