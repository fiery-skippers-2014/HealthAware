class Nutrient < ActiveRecord::Base
  has_many :goals
  has_many :users, though: :goals
end