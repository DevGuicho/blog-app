class CreateComments < ActiveRecord::Migration[7.1]
  def change
    create_table :comments do |t|
      t.string :email_commenter
      t.text :body
      t.integer :article_rate, default: 0
      t.references :article, null: false, foreign_key: true

      t.timestamps
    end
  end
end
