class User < ActiveRecord::Base
  has_many :companies
  has_many :contacts
  has_many :trainings
  has_many :notes
  has_many :schedules
  has_many :leads
  has_many :products
  belongs_to :role

  
  belongs_to :business
  accepts_nested_attributes_for :business
  before_create :new_business, :role_for_new_user
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  
  def new_business
    Business.create(name: "New business")
    self.business_id = Business.last.id
  end
  
  def role_for_new_user
    self.role_id = 1
  end
  

end
