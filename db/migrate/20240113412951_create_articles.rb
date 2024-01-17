class CreateArticles < ActiveRecord::Migration[7.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :body
      t.string :image_url
      t.integer :rating, default: 0
      t.references :category
      t.timestamps
    end
  end
end
