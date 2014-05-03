class Goal < ActiveRecord::Base
  belongs_to :user
  belongs_to :nutrient
  attr_accessible :target, :nutrient_id

  def self.usergoals(current_user)
    goals = {}
    @goals = Goal.where("user_id = ?", current_user.id)
    @goals.each do |goal|
      goals[goal.nutrient.name] = goal.target
    end
    goals
  end

end