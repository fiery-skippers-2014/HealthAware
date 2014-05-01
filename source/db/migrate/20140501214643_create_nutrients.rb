class CreateNutrients < ActiveRecord::Migration
  def change
    create_table :nutrients do |t|
      t.string :name
      t.integer :FDA_recommendation
      t.timestamps
    end
  end


end
