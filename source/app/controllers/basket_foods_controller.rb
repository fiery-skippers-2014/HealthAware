class BasketFoodsController < ApplicationController

  def show
    debugger
    timeline_array = []
    #Each Basket

    last_weeks_basket = current_user.baskets[-7..-1]
    last_weeks_basket.each_with_index do |basket, index|
    debugger
    # For every goal
      day_hash[index] = basket.created_at
      current_user.goals.each do |goal|
        # Each food in basket
        basket.foods.each do |food|
          item_name = Nutrient.find_by_id(goal.nutrient_id).nf_name
          day_hash[item_name] += food[item_name].to_i
        end
        timeline_array << day_hash
        debugger
      end
    end
  end

  def destroy
    @food_to_remove = BasketFood.find_by_basket_id_and_food_id(current_user.baskets.last.id, params[:id])
    @food_to_remove.destroy
    render json: @food_to_remove.food_id
  end

end
