# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#

class Post < ActiveRecord::Base
  validates :body, :user_id, presence: true

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many(
    :comments,
    class_name: "Comment",
    foreign_key: :post_id,
    primary_key: :id,
    dependent: :destroy
  )

  def self.in_bounds(search_string)
    like_query = "%#{search_string}%"
    Post.where("lower(posts.body) LIKE ?", like_query.downcase).limit(10)
  end

end
