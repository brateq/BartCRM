class SettingsController < ApplicationController
  def index
  end

  def main
    @business = current_user.business
  end
end
