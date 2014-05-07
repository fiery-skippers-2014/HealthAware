class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.belongs_to :user
      t.belongs_to :nutrient
      t.boolean :limit
      t.string :nutrient
      t.string :unit
      t.integer :target

      t.timestamps
    end
  end
end
