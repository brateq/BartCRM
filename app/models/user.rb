class User < ActiveRecord::Base
  has_many :companies
  has_many :contacts
  has_many :notes
  has_many :schedules
  belongs_to :business
  accepts_nested_attributes_for :business
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include TheRole::User

end
