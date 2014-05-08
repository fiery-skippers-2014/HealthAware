class BasketsController < ApplicationController
  # move this to index action and fetch current_user.todays_basket
  def show
    goals = current_user.goals_as_json
    user_id = session[:user_id]
    basket = Basket.display_todays_basket(user_id)
    render json: {basket: basket, goals: goals}
  end
end
