class CreateTeachers < ActiveRecord::Migration
  def change
    create_table :teachers do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.integer :admin, null: false

      t.timestamps null: false
    end
  end
end
