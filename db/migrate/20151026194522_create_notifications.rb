class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.string :body, null: false
      t.integer :notifyee_id, null: false
      t.integer :notifier_id, null: false

      t.timestamps null: false
    end
    add_index :notifications, :notifyee_id
    add_index :notifications, :notifier_id
  end
end
