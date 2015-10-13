class Api::UsersController < ApplicationController
  def index
    @user = User.find(current_user.id)
    render json: @user
  end


end
