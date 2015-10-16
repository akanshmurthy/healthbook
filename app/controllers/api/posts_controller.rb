class Api::PostsController < ApplicationController
  def index
    if params[:search_string]
      @posts = Post.in_bounds(params[:search_string])
      render json: @posts
    else
      @posts = Post.all
      render json: @posts
    end
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    else
      render @post.errors.full_messages
    end
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    render json: post
  end

  private

  def post_params
    params.require(:post).permit(:body)
  end
end
