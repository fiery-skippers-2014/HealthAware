class User < ActiveRecord::Base

  has_many :goals
  has_many :nutrients, through: :goals

  validates_presence_of :username, :email, :password
end
