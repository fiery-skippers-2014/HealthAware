class GoalsController < ApplicationController

  def new
    @goal = Goal.new
  end

  def create
    @goal = Goal.new
    @goal.nutrient_id = params[:goal][:nutrient_id]
    @goal.user_id = current_user.id
    if params[:amount] == "FDA"

      @goal.target = @goal.nutrient.FDA_recommendation
      @goal.limit = @goal.nutrient.FDA_limit
      @goal.unit = @goal.nutrient.unit
    else
      @goal.target = params[:goal][:target]
        if params[:limit][:limit_id] == "minimum"
          @goal.limit = true
        else
          @goal.limit = false
        end
    end
    @goal.save!
    redirect_to new_goal_path
  end

end