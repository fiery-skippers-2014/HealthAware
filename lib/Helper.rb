module Helper
  def current_user
    @user ||= User.find(session[:user_id]) if session[:user_id]
    p "the user"
    p @user
    @user
  end
end