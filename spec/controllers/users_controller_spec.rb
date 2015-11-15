require 'rails_helper'

describe UsersController do
  it "redirects to home page upon save" do
    post :create, {user: {user_name:"test123", password:"test123"}}
    response.should redirect_to root_url
  end
end
