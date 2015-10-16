class Post < ActiveRecord::Base
  validates :body, presence: true

  def self.in_bounds(search_string)
    like_query = "%#{search_string}%"
    Post.where("lower(posts.body) LIKE ?", like_query.downcase)
  end

end
