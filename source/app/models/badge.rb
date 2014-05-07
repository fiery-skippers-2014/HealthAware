class Badge < ActiveRecord::Base
  attr_accessible :user_id, :nutrient, :target, :limit, :unit

  belongs_to :user
  validates_uniqueness_of :nutrient, :scope => :user_id
end