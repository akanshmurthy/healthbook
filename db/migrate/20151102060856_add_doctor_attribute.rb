class AddDoctorAttribute < ActiveRecord::Migration
  def change
    add_column :users, :is_doctor, :boolean, default: false
  end
end
