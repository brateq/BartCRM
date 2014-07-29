class DashboardController < ApplicationController
  def index
    @users = User.where(business_id: current_user.business_id)
    @activities = PublicActivity::Activity.where(owner_id: @users).order("created_at desc").page params[:page]
    respond_to do |format|
      format.html
      format.js
    end
  end
end
