class UsersController < ApplicationController

  def new
    @user = User.new
    @goal = Goal.new
    p "nutrients" * 50
    @nutrients = Nutrient.all
    p @nutrients
  end

  def create
    p "$" * 50
    p params
    p "$" * 50
    @user = User.new params[:user]
    @nutrients = Nutrient.all

    p @nutrients
    if @user.save!
      login_user
    end
    @goal = Goal.new params[:goal]
    @goal.user_id = @user.id
    @goal.save
    redirect_to user_path(@user)
  end

  def show
    @user = User.find(params[:id])
  end

end