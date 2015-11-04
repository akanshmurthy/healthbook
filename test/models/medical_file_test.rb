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

require 'test_helper'

class MedicalFileTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
