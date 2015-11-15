# == Schema Information
#
# Table name: medical_posts
#
#  id          :integer          not null, primary key
#  field_name  :string
#  field_value :string
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class MedicalPost < ActiveRecord::Base
  validates :user_id, presence: true

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  def self.in_bounds(search_string)
    like_query = "%#{search_string}%"
    MedicalPost.where("lower(medical_posts.field_name) LIKE ?", like_query.downcase).limit(10)
  end

end
