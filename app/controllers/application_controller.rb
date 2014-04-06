class ApplicationController < ActionController::Base
  include TheRole::Controller
  before_action :login_required, :search
  protect_from_forgery with: :exception
  layout :layout_by_resource
  
  def access_denied
    flash[:error] = t('the_role.access_denied')
    redirect_to(:back)
  end
  
  def search
    if user_signed_in?
      @main_search = Company.where(:business_id => current_user.business_id).search(params[:q]) 
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
     