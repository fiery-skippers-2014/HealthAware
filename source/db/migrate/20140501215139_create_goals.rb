class CreateGoals < ActiveRecord::Migration
  def create
    create_table :goals do
      t.belongs_to :user
      t.belongs_to :nutrient
      t.timestamps
    end
  end


end
