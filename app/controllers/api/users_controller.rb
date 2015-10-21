class Api::UsersController < ApplicationController
  def index
    @user = User.find(current_user.id)
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    if @user.update(params[:url].permit(:url_string))
      p "successfully patched!"
      render json: @user
    else
      render json: @user.errors.full_messages
    end
  end

  def destroy
    @user = User.find(current_user.id)
    @user.logout_user!
    render json: "Successfully logged out"
  end
  
end
