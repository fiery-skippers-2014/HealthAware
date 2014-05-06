class BasketFoodsController < ApplicationController

  def show
    timeline_hash = {}
    #Each Basket
    xAxis = {categories: []}
    series = []

    last_weeks_basket = current_user.baskets.reverse[0..7]
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

        day_values = today_hash.values[0]
        all_days_of_week.unshift(day_values)
      end

      # Create User Badges
      if goal.limit == true
        if all_days_of_week.min < goal.target
          Badge.create(user_id: current_user.id, goal_id: goal.id)
        end
      elsif goal.limit == false
        if all_days_of_week.min >= goal.target
          Badge.create(user_id: current_user.id, goal_id: goal.id)
        end
      end

      #Prepare for JSON
      series << {name: goal.nutrient.name, data: all_days_of_week, id: goal.id, limit: goal.limit, unit: goal.unit, target: goal.target, badges: Badge.find_by_user_id_and_goal_id(current_user.id,goal.id)}
    end
    render json: {series: series, xAxis: xAxis}
  end

  def destroy
    @food_to_remove = BasketFood.find_by_basket_id_and_food_id(current_user.baskets.last.id, params[:id])
    @food_to_remove.destroy
    render json: @food_to_remove.food_id
  end
end
