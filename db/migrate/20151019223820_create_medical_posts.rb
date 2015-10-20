class CreateMedicalPosts < ActiveRecord::Migration
  def change
    create_table :medical_posts do |t|
      t.string :field_name
      t.string :field_value
      t.integer :user_id, null: false
      t.timestamps null: false
    end
  end
end
