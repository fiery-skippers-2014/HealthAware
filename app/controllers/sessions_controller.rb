class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_username(params[:session][:username])
      if @user && @user.authenticate(params[:session][:password])
        login_user
      end
    redirect_to root_path
  end

  def destroy
    logout_user
    redirect_to root_path
  end
end
