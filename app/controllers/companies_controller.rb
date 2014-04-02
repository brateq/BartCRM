class CompaniesController < ApplicationController
  before_action :set_company, only: [:show, :edit, :update, :destroy, :fullshow, :fulledit]
  respond_to :html, :json
  # GET /companies
  # GET /companies.json
  def index
    @search = Company.search(params[:q])
    @companies = Company.order(:id).page
    @companies = @search.result.page params[:page]
    @how_many_companies = Company.count
  end

  # GET /companies/1
  # GET /companies/1.json
  def show
  end

  # GET /companies/new
  def new
    @company = Company.new
    @company.contacts.build
  end

  # GET /companies/1/edit
  def edit
  end

  # POST /companies
  # POST /companies.json
  def create
    @company = Company.new(company_params)
    respond_to do |format|
      if @company.save
        format.html { redirect_to @company, notice: 'Company was successfully created.' }
        format.json { render action: 'show', status: :created, location: @company }
      else
        format.html { render action: 'new' }
        format.json { render json: @company.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /companies/1
  # PATCH/PUT /companies/1.json
  def update
    respond_to do |format|
      if @company.update(company_params)
        format.html { redirect_to @company, notice: 'Company was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @company.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /companies/1
  # DELETE /companies/1.json
  def destroy
    @company.destroy
    respond_to do |format|
      format.html { redirect_to companies_url }
      format.json { head :no_content }
    end
  end
  
  def import
    Company.import(params[:file])
    redirect_to companies_path, notice: "Companies imported"
  end
  
  def fullshow
  end
  
  def fulledit
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_company
      @company = Company.find(params[:id])
      @owner_check_object = @company
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def company_params
      params.require(:company).permit(:name, :www, :email, :legal_form, :phone, :street, :postcode, :city, :country, :krs, :decription, :nip, :regon, :progress, :type_of_training, :trade, :electronic_invoice, :contact_id, :user_id, contacts_attributes: [:id, :name, :surname, :mobile_number, :office_number, :street, :postalcode, :city, :country, :dont_call, :newslatter, :created_by, :modified_by, :know_from, :description, :email, :user_id, :company_id])
    end
end
