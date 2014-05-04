class GoalsController < ApplicationController

  def new
    @goal = Goal.new
  end

  def create
    p params
    @goal = Goal.new
    @goal.nutrient_id = params[:goal][:nutrient_id]
    @goal.user_id = current_user.id
    if params[:amount] == "FDA"

      @goal.target = @goal.nutrient.FDA_recommendation
      @goal.limit = @goal.nutrient.FDA_limit
      @goal.unit = @goal.nutrient.unit
    else
      @goal.target = params[:goal][:target]
      @goal.unit = @goal.nutrient.unit
        if params[:limit][:limit_id] == "minimum"
          @goal.limit = true
        else
          @goal.limit = false
        end
    end
    @goal.save!
    @goal = Goal.new
    redirect_to new_goal_path
    # render partial: 'goal', :locals => {:goal => @goal}
  end

  def destroy
    @goal = Goal.find(params[:id])
    @goal.destroy
    @goal.id
    render json: {goal:@goal.id}
  end

end
