class BasketsController < ApplicationController
  def index
    @baskets = Basket.find_all_by_user_id(session[:user_id])
    @all_baskets = []
    @baskets.each do |basket|
      if (Time.now-basket.created_at > 54000)
        @all_baskets << basket
      end
    end
  end

  def show
    @goal = Goal.usergoals(current_user)
    if Basket.find_all_by_user_id(session[:user_id]).any?
      most_recent_basket = Basket.find_by_user_id(session[:user_id])
      if Time.now- most_recent_basket.created_at < 86000
        @basket = most_recent_basket.foods
      end
    else
      @basket
    end
    render json: {basket:@basket, goal:@goal}
  end
end