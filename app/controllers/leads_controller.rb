# frozen_string_literal: true

class LeadsController < ApplicationController
  before_action :set_lead, only: %i[show edit update destroy]

  def index
    @search = Lead.search(params[:q])
    @leads = @search.result.page params[:page]
    @how_many_leads = @leads.count
  end

  def show; end

  def new
    @lead = Lead.new
  end

  def edit; end

  def create
    @lead = Lead.new(lead_params)

    respond_to do |format|
      if @lead.save
        format.html { redirect_to :back, notice: 'Lead was successfully created.' }
        format.json { render action: 'show', status: :created, location: @lead }
      else
        format.html { render action: 'new' }
        format.json { render json: @lead.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @lead.update(lead_params)
        format.html { redirect_to @lead, notice: 'Lead was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @lead.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @lead.destroy
    respond_to do |format|
      format.html { redirect_to :back }
      format.json { head :no_content }
    end
  end

  private

  def set_lead
    @lead = Lead.find(params[:id])
  end

  def lead_params
    params.require(:lead).permit(:status, :amount, :user_id, :company_id, :training_id,
                                 :contact_id, :note_id, :product_id)
  end
end
