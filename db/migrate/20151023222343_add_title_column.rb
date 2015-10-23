class AddTitleColumn < ActiveRecord::Migration
  def change
    add_column :medical_files, :title, :string, null: false
  end
end
