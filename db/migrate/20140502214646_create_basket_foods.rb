class CreateBasketFoods < ActiveRecord::Migration
  def change
    create_table :basket_foods do |t|
      t.belongs_to :basket
      t.belongs_to :food
      t.integer :quantity, default: 1
      t.timestamps
    end
  end
end
