class AddIndex < ActiveRecord::Migration
  def change
    add_index :medical_posts, :user_id
  end
end
