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
