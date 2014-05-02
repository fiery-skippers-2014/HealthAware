class BasketsController < ApplicationController
  def show
   @basket = Basket.find_by_user_id(session[:user_id])
   @basket
  end
end