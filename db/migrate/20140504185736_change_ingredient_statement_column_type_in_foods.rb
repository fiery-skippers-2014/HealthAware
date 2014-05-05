class ChangeIngredientStatementColumnTypeInFoods < ActiveRecord::Migration
  def change
  	change_column :foods, :nf_ingredient_statement, :text
  end
end
