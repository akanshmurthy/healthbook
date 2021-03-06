class Api::CommentsController < ApplicationController
  def index
    if params[:search_string]
      @comments = Comment.in_bounds(params[:search_string]).where("comments.user_id = ?", current_user.id)
      render json: @comments
    else
      @comments = Comment.all
      render json: @comments
    end
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render json: @comment
    else
      render @comment.errors.full_messages
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if current_user.id == @comment.user_id
      @comment.destroy
      render json: @comment
    else
      render json: "You can't delete comments that belong to other users."
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :post_id)
  end

end
