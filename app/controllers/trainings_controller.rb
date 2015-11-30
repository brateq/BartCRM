class TrainingsController < ApplicationController
  before_action :set_training, only: [:show, :edit, :update, :destroy]

  def index
    @search = Training.search(params[:q])
    @trainings = @search.result.page params[:page]
    @how_many_trainings = @trainings.count
  end

  def show
    @notes = Note.where(training_id: @training.id).order(:created_at).reverse
    @schedules = Schedule.where(training_id: @training.id).order(:time)
    @leads = Lead.where(training_id: @training.id)
    @documents = Document.where(training_id: @training.id)
  end

  def new
    @training = Training.new
  end

  def edit
  end

  def create
    @training = Training.new(training_params)

    respond_to do |format|
      if @training.save
        format.html { redirect_to @training, notice: 'Training was successfully created.' }
        format.json { render action: 'show', status: :created, location: @training }
      else
        format.html { render action: 'new' }
        format.json { render json: @training.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @training.update(training_params)
        format.html { redirect_to @training, notice: 'Training was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @training.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @training.destroy
    respond_to do |format|
      format.html { redirect_to trainings_url }
      format.json { head :no_content }
    end
  end

  private

  def set_training
    @training = Training.find(params[:id])
  end

  def training_params
    params.require(:training).permit(:topic, :category, :price, :start, :end, :training_code, :user_id,
                                     :description, :stage, :place, :company_id)
  end
end
