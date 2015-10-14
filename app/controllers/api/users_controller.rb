class Api::UsersController < ApplicationController
  def index
    @user = User.find(current_user.id)
    render json: @user
  end

  def destroy
    @user = User.find(current_user.id)
    @user.logout_user!
    render json: "Successfully logged out"
  end



end
