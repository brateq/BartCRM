# frozen_string_literal: true

class ProductsController < ApplicationController
  before_action :set_product, only: %i[show edit update destroy]

  # GET /products
  # GET /products.json
  def index
    @products = Product.where(business_id: current_user.business_id)
    @search = @products.search(params[:q])
    @products = @search.result.page params[:page]
    @how_many_products = @products.count
  end

  # GET /products/1
  # GET /products/1.json
  def show
    @notes = Note.where(product_id: @product.id).order(:created_at).reverse
    @schedules = Schedule.where(product_id: @product.id).order(:time)
    @leads = Lead.where(product_id: @product.id)
    @documents = Document.where(product_id: @product.id)
  end

  # GET /products/new
  def new
    @product = Product.new
  end

  # GET /products/1/edit
  def edit; end

  # POST /products
  # POST /products.json
  def create
    @product = Product.new(product_params)
    @product.business_id = current_user.business_id
    respond_to do |format|
      if @product.save
        format.html { redirect_to @product, notice: 'Product was successfully created.' }
        format.json { render action: 'show', status: :created, location: @product }
      else
        format.html { render action: 'new' }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /products/1
  # PATCH/PUT /products/1.json
  def update
    respond_to do |format|
      if @product.update(product_params)
        format.html { redirect_to @product, notice: 'Product was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /products/1
  # DELETE /products/1.json
  def destroy
    @product.destroy
    respond_to do |format|
      format.html { redirect_to products_url }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_product
    @product = Product.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def product_params
    params.require(:product).permit(:name, :price, :start, :end, :code, :user_id,
                                    :description, :stage, :place, :category)
  end
end
