# == Schema Information
#
# Table name: notifications
#
#  id          :integer          not null, primary key
#  body        :string           not null
#  notifyee_id :integer          not null
#  notifier_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class NotificationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
