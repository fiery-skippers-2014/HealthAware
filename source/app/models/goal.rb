class Goal < ActiveRecord::Base
  belongs_to :user
  belongs_to :nutrient
  attr_accessible :target, :nutrient_id,:limit,:unit,:user_id
  validates_uniqueness_of :nutrient_id, :scope => :user_id

  def self.goal_count(current_user)
    if current_user.goals.count >= 3
      return false
    else
      return true
    end
  end

  def self.usergoals(current_user)
    array_of_goals = []
    goals = {}
    current_user.goals.each do |goal|
      goals[goal.nutrient.nf_name] = goal.target
      goals["limit"] = goal.limit
      goals["unit"] = goal.unit
      goals["id"] = goal.id
      array_of_goals << goals
      goals = {}
    end
    array_of_goals
  end
end
