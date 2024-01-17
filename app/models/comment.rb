class Comment < ApplicationRecord
  belongs_to :article
  scope :most_recent, -> { order(created_at: :desc) }
end
