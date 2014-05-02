class CreateFoods < ActiveRecord::Migration
  def change
    create_table :foods do |f|
      f.string :API
      f.string :item_name
      f.string :nf_protein
      f.string :nf_serving_size_qty
      f.string :nf_serving_size_unit
      f.string :nf_total_carbohydrate
      f.string :nf_total_fat
      f.timestamps
    end
  end
end
