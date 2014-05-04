class HomeController < ApplicationController
  def index
    unless current_user
      redirect_to new_user_path
    end
    # session[:user_id] = nil
  end

  def show
  end

end
