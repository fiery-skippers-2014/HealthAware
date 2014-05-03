class ApplicationController < ActionController::Base
  protect_from_forgery
  include ApplicationHelper
  helper_method :login_user
  helper_method :current_user
  helper_method :logout_user
  def login_user
    session[:user_id] = @user.id
  end

  def logout_user
    session[:user_id] = nil
  end

  def current_user
    p "the user"
    @user ||= User.find(session[:user_id]) if session[:user_id]
    p "the user"
    p @user
    @user
  end

end
