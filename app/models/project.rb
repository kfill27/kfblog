class Project < ActiveRecord::Base
  attr_accessor :project_image_file_name
  has_attached_file :project_image, styles: { medium: "300x300>"}, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :project_image, content_type: /\Aimage\/.*\Z/
end
