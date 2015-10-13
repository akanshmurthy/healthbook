class StaticPagesController < ApplicationController
  before_action :require_user!, only: [:root]

  def root
    render :root
  end
end
