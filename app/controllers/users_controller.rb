class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new params[:user]
    if @user.save
      login @user
      redirect_to new_goal_path
    else
      render 'users/new'
    end
  end

  def edit
    @goal = Goal.new
    @nutrients = Nutrient.all
  end

  def update
    @goal.user_id = current_user.id
    redirect_to user_path(current_user)
  end

  def chart
    xAxis =  Chart.create_xAxis(current_user)
    series = Chart.create_series(current_user)
    weekly_badges = Badge.weekly_total(current_user.badges)
    render json: {series: series, xAxis: xAxis, badges: weekly_badges.reverse}
  end
end
