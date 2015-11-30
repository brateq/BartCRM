class ManagerController < ApplicationController
  skip_before_action :authenticate_user!
  skip_before_action :require_no_authentication

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.business_id = current_user.business_id
    respond_to do |format|
      if @user.create
        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render action: 'show', status: :created, location: @user }
      else
        format.html { render action: 'new' }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end
end
