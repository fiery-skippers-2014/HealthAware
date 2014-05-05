class BasketsController < ApplicationController
  def index
    @baskets = Basket.find_all_by_user_id(session[:user_id])
    @all_baskets = []
    @baskets.each do |basket|
      if (Time.now-basket.created_at > 54000)
        @all_baskets << basket
      end
    end
  end


###Method for Chart



#Chart Method
# timeline_array = []
# #Each Basket

# last_weeks_basket = current_user.baskets[-7..-1]
# last_weeks_basket.each_with_index do |basket, index|

#   # For every goal
#   day_hash[index] = basket.created_at
#   current_user.goals.each do |goal|
#     # Each food in basket
#     basket.foods.each do |food|
#       item_name = Nutrient.find_by_id(goal.nutrient_id).nf_name
#       day_hash[item_name] += food[item_name].to_i
#     end
#   end
#   timeline_array << day_hash
# end




  def show
    @goal = Goal.usergoals(current_user)
    if Basket.find_all_by_user_id(session[:user_id]).count > 0
        @baskets = Basket.find_all_by_user_id(session[:user_id])
        if (Time.now-@baskets.last.created_at < 54000)
          @basket = @baskets.last.foods
        end
    else
      @basket
    end
      render json: {basket:@basket, goal:@goal}
  end
end