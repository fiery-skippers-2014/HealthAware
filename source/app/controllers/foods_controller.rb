class FoodsController < ApplicationController
  def create
    params["fields"]["API"]=params["_id"]
    if Food.find_by_API(params["_id"])
        food = Food.find_by_API(params["_id"])
    else
        food = Food.new(params["fields"])
    end
    food.save!

    if Basket.find_by_user_id(session[:user_id])
      basket = Basket.find_by_user_id(session[:user_id])
      if BasketFood.find_by_food_id(food.id)
        basketfood = BasketFood.find_by_food_id(food.id)
        basketfood.quantity = basketfood.quantity + 1
        basketfood.update_attributes(quantity:  basketfood.quantity)
        basketfood.save
      else
        BasketFood.create(basket_id: basket.id, food_id: food.id)
      end
    else
      @basket = Basket.create(user_id: session[:user_id])
      BasketFood.create(basket_id: @basket.id, food_id: food.id)
    end

  end
end