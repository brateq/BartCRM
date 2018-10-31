# frozen_string_literal: true

class Business < ActiveRecord::Base
  has_many :users
  accepts_nested_attributes_for :users
end
