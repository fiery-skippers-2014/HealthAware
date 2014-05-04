class Goal < ActiveRecord::Base
  belongs_to :user
  belongs_to :nutrient
  attr_accessible :target, :nutrient_id,:limit,:unit,:user_id


  def self.usergoals(current_user)
    array_of_goals = []
    goals = {}
    current_user.goals.each do |goal|
      goals[goal.nutrient.nf_name] = goal.target
      goals[goal.nutrient.name] = goal.target
      goals["#{goal.nutrient.nf_name}_FDA_recommendation"] = goal.nutrient.FDA_recommendation
      array_of_goals << goals
      goals = {}
    end
    array_of_goals
  end

end