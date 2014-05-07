class User < ActiveRecord::Base
  # include BCrypt
  attr_accessible :username,:password,:password_confirmation, :email
  has_secure_password
  has_many :goals
  has_many :baskets
  has_many :nutrients, through: :goals
end
