class RaportsController < ApplicationController
  def index
  end

  def calls
    @chart = Call.group_by_day(:created_at).count
    @search = Call.all.search(params[:q])
    @calls = @search.result.page params[:page]
  end
end
 