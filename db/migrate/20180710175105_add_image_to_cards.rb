class AddImageToCards < ActiveRecord::Migration[5.2]
  def change
    add_column :cards, :imageUrl, :string, default: "", null: false
  end
end
