# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  user_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  url_string      :string
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :password, length: {minimum: 6, allow_nil: true}
  validates :password_digest, presence: true
  validates :user_name, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true

  after_initialize :ensure_session_token

  has_many(
    :posts,
    class_name: "Post",
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many(
    :medical_posts,
    class_name: "MedicalPost",
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many(
    :medical_files,
    class_name: "MedicalFile",
    foreign_key: :user_id,
    primary_key: :id
  )

  def self.find_by_credentials(user_name, password)
    user = User.find_by(user_name: user_name)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
