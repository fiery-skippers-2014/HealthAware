# class BasketFoodsController < ApplicationController

#   def destroy
#     @food_to_remove = BasketFood.find_by_basket_id_and_food_id(current_user.baskets.last.id, params[:id])
#     @food_to_remove.destroy
#     render json: params[:id]
#   end
# end
