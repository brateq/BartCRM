class ImportsController < ApplicationController
  before_action :set_import, only: [:show, :edit, :update, :destroy]
  respond_to :html, :json

  def index
  end

  def show
  end

  def new
    @import = Import.new
  end 

  def edit
    @header = Company.header(@import.base)
    @sample = Company.prepare(@import.base)
    
    @fields = "name", "www", "email"  
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
    respond_to do |format|
      if @import.update(import_params)
        format.html { redirect_to :root, notice: 'Import was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @import.errors, status: :unprocessable_entity }
      end
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
      params.require(:import).permit(:base, :user_id, :header)
    end
end
     