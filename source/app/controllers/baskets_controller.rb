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
    if Basket.find_all_by_user_id(session[:user_id]).count > 0
        @baskets = Basket.find_all_by_user_id(session[:user_id])
        if (Time.now-@baskets.last.created_at < 54000)
          @basket = @baskets.last.foods
        end
    else
      @basket
    end
      render json: {basket:@basket, goal:@goal}
  end
end