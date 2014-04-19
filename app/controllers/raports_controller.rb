class RaportsController < ApplicationController
  def index
  end

  
  def calls
    @calls = Company.all.search(params[:q])
    @chart = Company.group_by_day(:created_at).count
  end
end
 