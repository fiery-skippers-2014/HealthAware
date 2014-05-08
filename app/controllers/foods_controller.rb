class FoodsController < ApplicationController

  def create
    params["fields"]["API"] = params["_id"]
    api_food_id = params["_id"]
    food_item_fields = params["fields"]
    user_id = session[:user_id]
    @food = Foond.find_or_create_by_api_and_item_name(food_item_fields, api_food_id)
    @basket = Food.create_or_find_existing_basket(user_id, current_user)

    @basket.foods << @food
    render json: {food: @food}
  end

  def destroy
    @food_to_remove = BasketFood.find_by_basket_id_and_food_id(current_user.baskets.last.id, params[:id])
    @food_to_remove.destroy
    render json: params[:id]
  end

end
