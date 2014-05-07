class BasketFoodsController < ApplicationController

  def show
    timeline_hash = {}
    #Each Basket
    xAxis = {categories: []}
    series = []
    reach_badges = []
    limit_badges = []

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
      if goal.limit == false
        if all_days_of_week.min >= goal.target
          Badge.create(user_id: current_user.id, nutrient_id:goal.nutrient.id, nutrient: goal.nutrient.name, target: goal.target, limit: goal.limit, unit: goal.unit)
        end
      else
        if all_days_of_week.max < goal.target
          Badge.create(user_id: current_user.id, nutrient_id:goal.nutrient.id, nutrient: goal.nutrient.name, target: goal.target, limit: goal.limit, unit: goal.unit)
        end
      end

      #Prepare for High Charts
      series << {name: goal.nutrient.name, data: all_days_of_week, id: goal.id, limit: goal.limit, unit: goal.unit, target: goal.target, badges: Badge.find_by_user_id_and_nutrient(current_user.id,goal.nutrient.name)}
    end

    # Send all badges back to JS

    current_user.badges.each do |badge|
      new_badge = {}
      new_badge["name"] = badge.nutrient
      new_badge["target"] = badge.target
      new_badge["time"] = badge.created_at.strftime('%b %d, %Y')
      new_badge["unit"] = badge.unit
      if badge.limit == true
        limit_badges << new_badge
      else
        reach_badges << new_badge
      end
    end

    render json: {series: series, xAxis: xAxis, limit_badges: limit_badges, reach_badges: reach_badges}
  end

  def destroy
    @food_to_remove = BasketFood.find_by_basket_id_and_food_id(current_user.baskets.last.id, params[:id])
    @food_to_remove.destroy
    render json: @food_to_remove.food_id
  end
end
