class RemoveQuantityColumnFromBasketFoods < ActiveRecord::Migration
  def change
  	remove_column :basket_foods, :quantity
  end
end
