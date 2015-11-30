class ApplicationController < ActionController::Base
  include PublicActivity::StoreController
  before_action :authenticate_user!, :search, :schedules_reminder
  protect_from_forgery with: :exception
  layout :layout_by_resource
  before_action :permit_username, if: :devise_controller?

  def search
    return unless user_signed_in?
    @main_search = Company.where(business_id: current_user.business_id).search(params[:q])
  end

  def schedules_reminder
    return unless user_signed_in?
    @schedules_reminder = Schedule
                          .where(user_id: current_user.id)
                          .order(:time)
                          .first(5)
  end

  protected

  def permit_username
    devise_parameter_sanitizer.for(:sign_up) << :username
  end

  def layout_by_resource
    if devise_controller?
      'devise'
    else
      'application'
    end
  end
end
