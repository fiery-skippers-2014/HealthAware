class BasketFoodsController < ApplicationController

  def show
    timeline_hash = {}
    #Each Basket
    xAxis = {categories: []}
    series = []

    last_weeks_basket = current_user.baskets[0..7]
    last_weeks_basket.each do |basket|
      xAxis[:categories].unshift(basket.created_at.strftime("%m/%d/%Y"))
    end
    # For every goal
    current_user.goals.each do |goal|
      all_days_of_week = []
      last_weeks_basket.each_with_index do |basket, index|
        today_hash = {}
      # Each food in basket
        basket.foods.each do |food|
          array_of_food = []
          item_name = Nutrient.find_by_id(goal.nutrient_id).nf_name
          if today_hash[item_name] != nil
            today_hash[item_name] += food[item_name].to_i
          else
            today_hash[item_name] = food[item_name].to_i
          end
        end
      # today_hash.keys.map { |key| Goal.find_by_nutrient_id(Nutrient.find_by_nf_name(key)).nutrient.name }
        day_values = today_hash.values[0]
        all_days_of_week.unshift(day_values)
      end
      # new_keys = today_hash.keys.map { |key| Goal.find_by_nutrient_id(Nutrient.find_by_nf_name(key)).nutrient.name }

      # formatted_day_hash = Hash[new_keys.zip(values)]
      series << {name: goal.nutrient.name,
        data: all_days_of_week, id: goal.id
      }
    end
    render json: {series: series, xAxis: xAxis}
  end

  def destroy
    food_to_remove = BasketFood.find_by_basket_id_and_food_id(current_user.baskets.last.id, params[:id])
    food_to_remove.destroy
    render json: params[:id]
  end
end
