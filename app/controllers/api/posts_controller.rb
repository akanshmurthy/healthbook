class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    else
      render @post.errors.full_messages
    end
  end

  private

  def post_params
    params.require(:post).permit(:body)
  end
end
