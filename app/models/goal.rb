class Goal < ActiveRecord::Base
  belongs_to :user
  belongs_to :nutrient

  attr_accessible :target, :nutrient_id,:limit,:unit,:user_id
  validates_uniqueness_of :nutrient_id, :scope => :user_id
  def set_FDA_amounts
    self.target = self.nutrient.FDA_recommendation
    self.limit = self.nutrient.FDA_limit
    self.unit = self.nutrient.unit
  end
  def set_unit_amount
    self.unit = self.nutrient.unit
  end
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
      goals["name"] = goal.nutrient.name
      array_of_goals << goals
      goals = {}
    end
    array_of_goals
  end
end
