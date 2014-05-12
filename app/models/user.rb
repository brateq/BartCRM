class User < ActiveRecord::Base
  include TheRole::User
  
  has_many :companies
  has_many :contacts
  has_many :trainings
  has_many :notes
  has_many :schedules
  has_many :leads
  has_many :products

  
  belongs_to :business
  accepts_nested_attributes_for :business
  before_create :new_business
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, #:registerable,
         :recoverable, :rememberable, :trackable, :validatable
  
  def new_business
    Business.create(name: "New business")
    self.business_id = Business.last.id
  end

end
