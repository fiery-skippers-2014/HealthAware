class FoodsController < ApplicationController

  def create
    params["fields"]["API"]=params["_id"]
    if Food.find_by_API(params["_id"])
      @food = Food.find_by_API(params["_id"])
    else
      @food = Food.new(params["fields"])
    end
    @food.save!

    if Basket.find_all_by_user_id(session[:user_id]).count > 0 && (Time.now-current_user.baskets.first.created_at < 80000)
       @basket = current_user.baskets.first
     else
       @basket = Basket.create(user_id: session[:user_id])
     end
     BasketFood.create(basket_id: @basket.id, food_id: @food.id)
     render json: @food
     # Can we pass basket back here?! Check this out
   end
end
