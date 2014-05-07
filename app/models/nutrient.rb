class Nutrient < ActiveRecord::Base
  has_many :goals
  has_many :users, through: :goals
  attr_accessible :name,:FDA_recommendation,:nf_name,:FDA_limit,:unit
  validates_presence_of :name, :FDA_recommendation
end