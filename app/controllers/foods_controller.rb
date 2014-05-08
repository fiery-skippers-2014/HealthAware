class FoodsController < ApplicationController

  def create
    params["fields"]["API"]=params["_id"]
    if Food.find_by_API(params["_id"])
      @food = Food.find_by_API(params["_id"])
    else
      @food = Food.create(params["fields"])
    end

    if Basket.find_all_by_user_id(session[:user_id]).count > 0 && (Time.now-current_user.baskets.last.created_at < 80000)
      @basket = current_user.baskets.last
    else
      @basket = Basket.create(user_id: session[:user_id])
    end
    @basket.foods << @food
    render json: {basket:@basket.foods, goals:current_user.goals}
   end
end
