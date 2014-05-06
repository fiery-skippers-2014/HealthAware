class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new params[:user]
    if @user.save!
      login_user
    end
    redirect_to new_goal_path
  end

  def edit
    @goal = Goal.new
    @nutrients = Nutrient.all
  end

  def update
    @goal.user_id = current_user.id
    redirect_to user_path(current_user)
  end

  def show
    @user = User.find(params[:id])
  end
end
