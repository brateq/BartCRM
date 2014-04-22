class RaportsController < ApplicationController
  def index
  end

  
  def calls
    @calls = Call.all.search(params[:q])
    @chart = Call.group_by_day(:created_at).count
  end
end
 