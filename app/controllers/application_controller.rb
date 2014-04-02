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
    @search = Company.search(params[:q])
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
