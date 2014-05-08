class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new params[:user]
    if @user.save
      login_user
      redirect_to new_goal_path
    else
      render 'users/new'
    end
  end

  def edit
    @goal = Goal.new
    @nutrients = Nutrient.all
  end

  def update
    @goal.user_id = current_user.id
    redirect_to user_path(current_user)
  end

  def show
    @user = User.find(params[:id])
  end

  def chart
     timeline_hash = {}
    #Each Basket
    xAxis = {categories: []}
    series = []
    weekly_badges = []

    last_weeks_basket = current_user.baskets.reverse[0..7]
    last_weeks_basket.each do |basket|
      xAxis[:categories].unshift(basket.created_at.strftime("%m/%d"))
    end
    # For every goal
    current_user.goals.each do |goal|
      all_days_of_week = []
      #Each day in the week
      last_weeks_basket.each_with_index do |basket, index|
        today_hash = {}
        # Each food in today's basket
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

        if day_values !=nil
          all_days_of_week.unshift(day_values)
        end

      end

      # Create User Badges
      if all_days_of_week.count >= 6
        average = all_days_of_week.inject(:+)/all_days_of_week.length+1
        if goal.limit
          if average < goal.target
            Badge.create(user_id: current_user.id, nutrient_id:goal.nutrient.id, nutrient: goal.nutrient.name, target: average, limit: goal.limit, unit: goal.unit)
          end
        else
          if average >= goal.target
            Badge.create(user_id: current_user.id, nutrient_id:goal.nutrient.id, nutrient: goal.nutrient.name, target: average, limit: goal.limit, unit: goal.unit)
          end
        end
      end

      #Prepare for High Charts
      series << {name: goal.nutrient.name, data: all_days_of_week, id: goal.id, limit: goal.limit, unit: goal.unit, target: goal.target}
    end

    # Send all badges back to JS
    weekly_badges = Badge.weekly_total(current_user.badges)

    render json: {series: series, xAxis: xAxis, badges: weekly_badges.reverse}


  end
end
