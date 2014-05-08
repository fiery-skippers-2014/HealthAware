module Authentication
  def login user
    session[:user_id] = user.id
  end

  def logout_user
    session.clear
  end

  def current_user
    @user ||= User.find(session[:user_id]) if session[:user_id]
  end
end
