class Basket < ActiveRecord::Base
  attr_accessible :basket_id, :user_id

  has_many :basket_foods
  has_many :foods, through: :basket_foods

  def self.display_todays_basket(user_id)
    if self.find_all_by_user_id(user_id).any?
      most_recent_basket = self.find_all_by_user_id(user_id).last
      if Time.now- most_recent_basket.created_at < 86000
        most_recent_basket.foods
      end
    end
  end

  def self.create_or_find_existing_basket(current_user)
    if Basket.find_all_by_user_id(current_user.id).count > 0 && (Time.now-current_user.baskets.last.created_at < 80000)
      basket = current_user.baskets.last
    else
      basket = Basket.create(user_id: current_user.id)
    end
  end

end