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

  def self.create_week_badge(current_user, goal, all_days_of_week)
    if all_days_of_week.count >= 6
      average = all_days_of_week.inject(:+)/all_days_of_week.length+1
      if goal.limit
        if average < goal.target
          Badge.create(user_id: current_user.id, nutrient_id:goal.nutrient.id, nutrient: goal.nutrient.name, target: average, limit: goal.limit, unit: goal.unit)
        end
      else
        if average >= goal.target
          Badge.create(user_id: current_user.id, nutrient_id:goal.nutrient.id, nutrient: goal.nutrient.name, target: average, limit: goal.limit, unit: goal.unit)
        end
      end
    end
  end
end
