class PagesController < ApplicationController

def homepage
  @projects = Project.all
end

def about
end
end
