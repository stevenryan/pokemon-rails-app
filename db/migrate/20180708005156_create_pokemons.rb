class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.string :name, null: false, default: ""
      t.string :type1, null: false, default: ""
      t.string :type2, null: false, default: ""
      t.string :dexInfo, null: false, default: ""
      t.timestamps
    end
  end
end
