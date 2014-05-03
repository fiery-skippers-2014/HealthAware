class CreateGoals < ActiveRecord::Migration
  def change
    create_table :goals do |t|
      t.belongs_to :user
      t.belongs_to :nutrient
      t.integer :target
      t.boolean :limit
      t.string :unit
      t.timestamps
    end
  end
end
