# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20140504185736) do

  create_table "basket_foods", :force => true do |t|
    t.integer  "basket_id"
    t.integer  "food_id"
    t.integer  "quantity",   :default => 1
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
  end

  create_table "baskets", :force => true do |t|
    t.integer  "user_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "foods", :force => true do |t|
    t.string   "API"
    t.string   "item_name"
    t.string   "nf_protein"
    t.string   "nf_serving_size_qty"
    t.string   "nf_serving_size_unit"
    t.string   "nf_total_carbohydrate"
    t.string   "nf_total_fat"
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
    t.text     "nf_ingredient_statement"
    t.string   "nf_water_grams"
    t.string   "nf_calories"
    t.string   "nf_saturated_fat"
    t.string   "nf_monounsaturated_fat"
    t.string   "nf_polyunsaturated_fat"
    t.string   "nf_trans_fatty_acid"
    t.string   "nf_cholesterol"
    t.string   "nf_sodium"
    t.string   "nf_dietary_fiber"
    t.string   "nf_sugars"
    t.string   "nf_vitamin_a_dv"
    t.string   "nf_vitamin_c_dv"
    t.string   "nf_calcium_dv"
    t.string   "nf_iron_dv"
    t.string   "nf_refuse_pct"
    t.string   "nf_servings_per_container"
    t.string   "nf_serving_weight_grams"
  end

  create_table "goals", :force => true do |t|
    t.integer  "user_id"
    t.integer  "nutrient_id"
    t.integer  "target"
    t.boolean  "limit"
    t.string   "unit"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "nutrients", :force => true do |t|
    t.string   "name"
    t.string   "nf_name"
    t.integer  "FDA_recommendation"
    t.boolean  "FDA_limit"
    t.string   "unit"
    t.datetime "created_at",         :null => false
    t.datetime "updated_at",         :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "username"
    t.string   "password_digest"
    t.string   "email"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

end
