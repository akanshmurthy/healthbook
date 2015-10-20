class Api::MedicalPostsController < ApplicationController

  def index
    if params[:search_string]
      @posts = MedicalPost.in_bounds(params[:search_string]).where("medical_posts.user_id = ?", current_user.id)
      render json: @posts
    else
      @posts = MedicalPost.where("medical_posts.user_id = ?", current_user.id)
      render json: @posts
    end
  end

  def create
    @post = MedicalPost.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      render json: @post
    else
      render @post.errors.full_messages
    end
  end

  def show
    @post = MedicalPost.find(params[:id])
    render json: @post
  end

  def destroy
    post = MedicalPost.find(params[:id])
    post.destroy
    render json: post
  end

  private

  def post_params
    params.require(:post).permit(:field_name, :field_value)
  end
end
