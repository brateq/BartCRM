class RaportsController < ApplicationController
  def index
  end

  
  def calls
    @search = Call.all.search(params[:q])
    @calls = @search.result.page params[:page]
    @chart = Call.group_by_day(:created_at).count
    respond_to do |format|
      format.html
      format.json {render Call.group_by_day(:created_at).count}
    end
  end
end
 