class CreateMedicalFiles < ActiveRecord::Migration
  def change
    create_table :medical_files do |t|
      t.string :url_string, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :medical_files, :user_id
  end
end
