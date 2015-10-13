class UsersController < ApplicationController
  before_action :require_user!, only: [:index]
  before_action :require_no_user!, only: [:new, :create]

  def index
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login_user!(@user)
      redirect_to users_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def new
    @user = User.new
    render :new
  end

  private
  def user_params
    params.require(:user).permit(:password, :user_name)
  end
end