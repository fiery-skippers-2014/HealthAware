class BasketsController < ApplicationController
  def show
    @goal = Goal.usergoals(current_user)
    if Basket.find_all_by_user_id(session[:user_id]).any?
      most_recent_basket = Basket.find_all_by_user_id(session[:user_id]).last
      if Time.now- most_recent_basket.created_at < 86000
        @basket = most_recent_basket.foods
      end
    end
    render json: {basket:@basket, goal:@goal}
  end
end