class Post < ActiveRecord::Base
  include Bootsy::Container
  has_many :comments, dependent: :destroy
  validates :title, presence: true, length: {minimum: 3}
  validates :content, presence: true
end
