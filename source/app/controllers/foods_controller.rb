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
      today_basket = current_user.baskets.first
      if BasketFood.find_by_food_id_and_basket_id(@food.id, today_basket.id) != nil
        basketfood = BasketFood.find_by_food_id_and_basket_id(@food.id,    today_basket.id)
        basketfood.quantity += 1
        basketfood.update_attributes(quantity:  basketfood.quantity)
        basketfood.save!
      else
        basketfood = BasketFood.create(basket_id: today_basket.id, food_id: @food.id)
      end
    #if user never had a basket OR doesn't have basket today
    else
      @basket = Basket.create(user_id: session[:user_id])
      BasketFood.create(basket_id: @basket.id, food_id: @food.id)
    end
      debugger
    render json: @food
  end
end