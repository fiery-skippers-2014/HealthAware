class Goal < ActiveRecord::Base
  belongs_to :user
  belongs_to :nutrient
  attr_accessible :target, :nutrient_id
end