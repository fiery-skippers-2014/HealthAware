class GoalsController < ApplicationController

  def new
    @goal = Goal.new
    @errors = @errors
    p ("HIIIIIIIIIIII")
    p @errors
  end

  def create
    @goal = Goal.new(nutrient_id: params[:goal][:nutrient_id], user_id: current_user.id)

      unless @goal.valid?
        @errors = @goal.errors.full_messages
         flash[:notice] = "You added this nutrient already"
      else
        flash[:notice] = ""
      end


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
    @goal.save
    @goal = Goal.new

    render 'new', layout: false, errors: @errors
  end

  def destroy
    @goal = Goal.find(params[:id])
    @goal.destroy
    @goal.id
    render json: {goal: @goal.id}
  end

end
