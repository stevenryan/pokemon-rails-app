class AddIconToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :icon, :string, default: "", null: false
  end
end
