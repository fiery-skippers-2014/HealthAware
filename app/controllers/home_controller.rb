class HomeController < ApplicationController
  def index
    unless current_user
      redirect_to new_user_path
    end
  end

  def show
  end


end
