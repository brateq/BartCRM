class RegistrationsController < Devise::RegistrationsController
  skip_before_action :require_no_authentication
  before_action :authenticate_user!
  def new
    super
  end

  def create
    build_resource(sign_up_params)
    if user_signed_in?
      resource.business_id = current_user.business_id
    else
      resource.business_id = Business.last.id if Business.create(name: 'Best business ever!')
    end

    if resource.save
      yield resource if block_given?
      if resource.active_for_authentication?
        if user_signed_in?
          set_flash_message :notice, :adding_user
          redirect_to users_path
        else
          set_flash_message :notice, :signed_up if is_flashing_format?
          sign_up(resource_name, resource)
          respond_with resource, location: after_sign_up_path_for(resource)
        end
      else
        set_flash_message :notice, :"signed_up_but_#{resource.inactive_message}" if is_flashing_format?
        expire_data_after_sign_in!
        respond_with resource, location: after_inactive_sign_up_path_for(resource)
      end
    else
      clean_up_passwords resource

      if user_signed_in?
        redirect_to new_user_path, notice: 'Ups...'
      else
        respond_with resource
      end
    end
  end

  protected

  def after_sign_up_path_for(_resource)
    root_url
  end
end
