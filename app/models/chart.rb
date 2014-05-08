class Chart

  def self.create_xAxis(current_user)
    xAxis = {categories: []}
    last_weeks_basket = current_user.baskets.reverse[0..7]
    last_weeks_basket.each do |basket|
      xAxis[:categories].unshift(basket.created_at.strftime("%m/%d"))
    end
    return xAxis
  end

  def self.create_series(current_user)
    series = []
    last_weeks_basket = current_user.baskets.reverse[0..7]
      current_user.goals.each do |goal|
      all_days_of_week = []
      #Each day in the week
      last_weeks_basket.each do |basket|
        today_hash = {}
        # Each food in today's basket
        basket.foods.each do |food|
          item_name = Nutrient.find_by_id(goal.nutrient_id).nf_name
          if today_hash[item_name] != nil
            today_hash[item_name] += food[item_name].to_i
          else
            today_hash[item_name] = food[item_name].to_i
          end
        end
        day_values = today_hash.values[0]
        if day_values !=nil
          all_days_of_week.unshift(day_values)
        end
      end
      # Create User Badges
      Badge.create_week_badge(current_user,goal,all_days_of_week)
      series << {name: goal.nutrient.name, data: all_days_of_week, id: goal.id, limit: goal.limit, unit: goal.unit, target: goal.target}
    end
    return series
  end
end
