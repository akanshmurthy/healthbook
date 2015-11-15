# == Schema Information
#
# Table name: medical_files
#
#  id         :integer          not null, primary key
#  url_string :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string           not null
#

class MedicalFile < ActiveRecord::Base
  validates :title, :url_string, :user_id, presence: true

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  def self.in_bounds(search_string)
    like_query = "%#{search_string}%"
    MedicalFile.where("lower(medical_files.title) LIKE ?", like_query.downcase).limit(10)
  end

end
