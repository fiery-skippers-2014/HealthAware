class GoalsController < ApplicationController

  def new
    @goal = Goal.new

  end

  def create
    @goal = Goal.new
    p params[:goal][:nutrient_id]

        p "params" * 50
    @goal.nutrient_id = params[:goal][:nutrient_id]
    @goal.user_id = current_user.id
    @goal.limit = params[:limit][:limit_id]
    if params[:amount] == "FDA"
      @goal.target = 1000
    else
      @goal.target = params[:goal][:target]
    end
    @goal.save!
  end

end