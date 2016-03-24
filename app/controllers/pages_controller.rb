class PagesController < ApplicationController

def homepage
  @projects = Project.all
end

def about
  @instagram = Instagram.user_recent_media("225701853", {:count => 8})
end
end
