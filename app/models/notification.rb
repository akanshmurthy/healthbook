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

class Notification < ActiveRecord::Base
  belongs_to(
    :notifyee,
    class_name: "User",
    foreign_key: :notifyee_id,
    primary_key: :id
  )
  belongs_to(
    :notifier,
    class_name: "User",
    foreign_key: :notifier_id,
    primary_key: :id
  )
end
