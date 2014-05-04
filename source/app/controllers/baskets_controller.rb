class BasketsController < ApplicationController
  def index
    @baskets = Basket.find_all_by_user_id(session[:user_id])
    current_basket = []
    @baskets.each do |basket|
      current_basket << basket.foods
    end
  end

  def show
    @goal = Goal.usergoals(current_user)
    if Basket.find_all_by_user_id(session[:user_id]).count > 0
      @baskets = Basket.find_all_by_user_id(session[:user_id])
      @basket = @baskets.last.foods
    # (@baskets.last.updated_at - Time.now), ADD THIS LATER
    else
      @basket
    end
      render json: {basket:@basket, goal:@goal}
  end
end