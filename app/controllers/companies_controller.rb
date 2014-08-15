class CompaniesController < ApplicationController
  before_action :set_company, only: [:show, :edit, :update, :destroy, :fullshow, :fulledit]
  respond_to :html, :json
  autocomplete :company, :city
  # GET /companies
  # GET /companies.json
  
  def index
    @companies = Company.where(:business_id => current_user.business_id).order(:created_at)
    if @companies.blank?
      @empty = true
    end
    
    @how_many_companies = @companies.count
    @search = @companies.search(params[:q])
    
    
    if request.format == "xls"
      @companies = @search
    else
      @companies = @search.result.page params[:page]
    end
    
    respond_to do |format|
      format.html
      format.xls { send_data(@search.result.all.to_xls) }
      format.json
    end
  end

  # GET /companies/1
  # GET /companies/1.json
  def show
    @notes = Note.where(company_id: @company.id).order(:created_at).reverse
    @calls = Call.where(company_id: @company.id).order(:created_at).reverse
    @schedules = Schedule.where(company_id: @company.id).order(:time)
    @documents = Document.where(company_id: @company.id).order(:created_at)
  end

  # GET /companies/new
  def new
    @company = Company.new
    @tags = Company.where(:business_id == current_user.business_id).tag_counts
    
  end

  # GET /companies/1/edit
  def edit
  end

  # POST /companies
  # POST /companies.json
  def create
    @company = Company.new(company_params)
    @company.business_id = current_user.business_id
    @company.contacts.first.business_id = current_user.business_id unless @company.contacts.first.nil?
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
      params.require(:company).permit(:name, :www, :email, :legal_form, :phone, :street, :postcode, :city, :wojewodztwo, :country, :krs, :decription, :nip, :regon, :progress, :type_of_training, :trade, :electronic_invoice, :contact_id, :user_id, :business_id, :tag_list, contacts_attributes: [:id, :name, :surname, :mobile_number, :office_number, :street, :postalcode, :city, :country, :dont_call, :newslatter, :created_by, :modified_by, :know_from, :description, :email, :user_id, :company_id, :business_id])
    end
end
    