class Badge < ActiveRecord::Base
  attr_accessible :user_id, :goal_id

  has_many :goals
  has_many :users
end