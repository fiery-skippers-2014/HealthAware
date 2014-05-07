class BasketFood < ActiveRecord::Base
  attr_accessible :food_id, :basket_id

  belongs_to :basket
  belongs_to :food
end