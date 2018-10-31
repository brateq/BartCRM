# frozen_string_literal: true

class ImportsController < ApplicationController
  before_action :set_import, only: %i[show edit update destroy]
  respond_to :html, :json

  def index; end

  def show; end

  def new
    @import = Import.new
  end

  def edit
    @header = Company.prepare(@import.base, 1)
    @sample = Company.prepare(@import.base, 2)
    @sample2 = Company.prepare(@import.base, 3)
    @sample3 = Company.prepare(@import.base, 4)
  end

  def create
    @import = Import.new(import_params)
    @import.user_id = current_user.id
    respond_to do |format|
      if @import.save
        format.html { redirect_to edit_import_path(@import), notice: 'import was successfully created.' }
        format.json { render action: 'show', status: :created, location: @import }
      else
        format.html { render action: 'new' }
        format.json { render json: @import.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    user_business = current_user.business_id

    case @import.category
    when 'companies'
      Company.import(@import.base, user_business, @import.header)
    when 'contacts'
      Contact.import(@import.base, user_business, @import.header)
    end
    if @import.update(import_params)
      redirect_to :root, notice: 'Import was successfully updated.'
    else
      render action: 'edit'
    end
  end

  def destroy
    @import.destroy
    respond_to do |format|
      format.html { redirect_to :root }
      format.json { head :no_content }
    end
  end

  private

  def set_import
    @import = Import.find(params[:id])
  end

  def import_params
    params.require(:import).permit(:category, :base, :user_id)
  end
end
