class Badge < ActiveRecord::Base
  attr_accessible :user_id, :nutrient, :target, :limit, :unit, :nutrient_id

  belongs_to :user
  validates_uniqueness_of :nutrient, :scope => :user_id


 	def self.weekly_total(user_badges)
 		weekly_badges = []
    user_badges.each do |badge|
      new_badge = {}
      new_badge["name"] = badge.nutrient
      new_badge["target"] = badge.target
      # new_badge["time"] = time_ago_in_words(badge.created_at)
      new_badge["unit"] = badge.unit
      weekly_badges << new_badge
    end
    weekly_badges
 	end
end
