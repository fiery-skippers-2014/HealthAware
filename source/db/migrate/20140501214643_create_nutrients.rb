class CreateNutrients < ActiveRecord::Migration
  def change
    create_table :nutrients do |t|
      t.string :name
      t.string :nf_name
      t.integer :FDA_recommendation
      t.boolean :FDA_limit
      t.string :unit
      t.timestamps
    end
  end


end
