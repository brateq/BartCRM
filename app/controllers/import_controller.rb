class ImportController < ApplicationController
  def index
  end
  
  def new
    @header = Company.header(params[:file])
    @sample = Company.prepare(params[:file])
  end
   
end 