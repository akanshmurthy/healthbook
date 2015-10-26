class Comment < ActiveRecord::Base
  validates :body, :user_id, :post_id, presence: true

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  belongs_to(
    :post,
    class_name: "Post",
    foreign_key: :post_id,
    primary_key: :id
  )

  def self.in_bounds(search_string)
    like_query = "%#{search_string}%"
    Comment.where("lower(comments.body) LIKE ?", like_query.downcase)
  end
end
