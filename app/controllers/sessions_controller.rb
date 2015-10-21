class SessionsController < ApplicationController
  before_action :require_user!, only: [:destroy]
  before_action :require_no_user!, only: [:new, :create]

  def new
    render :new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:user_name],
      params[:user][:password]
    )

    if user.nil?
      flash.now[:errors] = ["Incorrect username and/or password"]
      render :new
    else
      login_user!(user)
      redirect_to root_url
    end
  end

  def destroy
    logout_user!
    render json: {message: "logged out"}
  end

end
