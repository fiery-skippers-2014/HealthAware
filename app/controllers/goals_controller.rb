class GoalsController < ApplicationController
  def new
    @goal = Goal.new
    @errors = @errors
  end

  def create

    @goal = Goal.new(nutrient_id: params[:goal][:nutrient_id], user_id: current_user.id)
    params[:amount] == "FDA" ? @goal.set_FDA_amounts : add_custom_amounts(params)
    @goal.save
    @errors =  @goal.errors.full_messages.first
    @goal = Goal.new

    render "new", layout: false, errors: @errors
  end




  def destroy
    @goal = Goal.find(params[:id])
    @goal.destroy
    @goal.id
    render json: {goal: @goal.id}
  end

end

def add_custom_amounts(params)
  if params[:goal][:target] == ""
        @goal.target = @goal.nutrient.FDA_recommendation
      else
        @goal.target = params[:goal][:target]
  end
  @goal.unit = @goal.set_unit_amount
      if params[:limit][:limit_id] == "Maximum"
        @goal.limit = true
      else
        @goal.limit = false
      end
end