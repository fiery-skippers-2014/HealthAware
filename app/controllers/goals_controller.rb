class GoalsController < ApplicationController
  def new
    @goal = Goal.new
    @errors = @errors
  end

  def create
    p "$" * 50
    p params
    @goal = Goal.new(nutrient_id: params[:goal][:nutrient_id], user_id: current_user.id)

    @goal.user_id = current_user.id
    if params[:amount] == "FDA"
      @goal.target = @goal.nutrient.FDA_recommendation
      @goal.limit = @goal.nutrient.FDA_limit
      @goal.unit = @goal.nutrient.unit
    else
      if params[:goal][:target] == ""
        @goal.target = @goal.nutrient.FDA_recommendation
      else
        @goal.target = params[:goal][:target]
      end
      @goal.unit = @goal.nutrient.unit

      if params[:limit][:limit_id] == "Maximum"
        @goal.limit = true
      else
        @goal.limit = false
      end

    end
    @goal.save
    @errors =  @goal.errors.full_messages.first

    @goal = Goal.new


    p "%" * 50
    render "new", layout: false, errors: @errors
  end

  def destroy
    @goal = Goal.find(params[:id])
    @goal.destroy
    @goal.id
    render json: {goal: @goal.id}
  end

end
