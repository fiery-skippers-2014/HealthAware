class BasketsController < ApplicationController
  def index
    @baskets = Basket.find_all_by_user_id(session[:user_id])
    current_basket = []
    @baskets.each do |basket|
      current_basket << basket.foods
    end
  end

  def show
    p "grabbing basket" * 100
    @baskets = Basket.find_all_by_user_id(session[:user_id])
    # (@baskets.last.updated_at - Time.now), ADD THIS LATER
    p @baskets.last.foods
    @basket = @baskets.last.foods
    render json: @basket
  end
end