class BasketsController < ApplicationController
  def show
    @goal = Goal.usergoals(current_user)
    user_id = session[:user_id]
    @basket = Basket.display_todays_basket(user_id)
    render json: {basket:@basket, goal:@goal}
  end
end