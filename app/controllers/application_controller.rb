class ApplicationController < ActionController::Base
  include TheRole::Controller
  before_action :login_required
  protect_from_forgery with: :exception
  
  def access_denied
    flash[:error] = t('the_role.access_denied')
    redirect_to(:back)
  end
end
