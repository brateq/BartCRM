class ApplicationController < ActionController::Base
  include TheRole::Controller
  before_action :search, :schedules_reminder
  protect_from_forgery with: :exception
  protect_from_forgery
  layout :layout_by_resource
  
  def access_denied
    render :text => 'access_denied: requires an role' and return
  end

  alias_method :login_required,     :authenticate_user! 
  alias_method :role_access_denied, :access_denied
  
  def search
    if user_signed_in?
      @main_search = Company.where(:business_id => current_user.business_id).search(params[:q]) 
    end
  end
   
  def schedules_reminder
    if user_signed_in?
      @schedules_reminder = Schedule.where(user_id: current_user.id).order(:time).first(5)
    end
  end

  protected

  def layout_by_resource
    if devise_controller?
      "devise"
    else
      "application"
    end
  end
end