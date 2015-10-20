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

require 'test_helper'

class MedicalPostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
