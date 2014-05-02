class CreateBaskets < ActiveRecord::Migration
  def change
    create_table :baskets do |f|
    f.belongs_to :user
    f.timestamps
    end
  end
end
