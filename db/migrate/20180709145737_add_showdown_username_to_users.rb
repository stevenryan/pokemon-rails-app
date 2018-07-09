class AddShowdownUsernameToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :showdownId, :string, default: "", null: false
  end
end
