class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|

      t.string :set, null: false, default: ""
      t.integer :number
      t.integer :user_id
      t.string :imageLink, null: false, default: ""
      t.timestamps
    end
  end
end
