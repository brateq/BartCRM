class User < ActiveRecord::Base
  has_many :companies
  has_many :contacts
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include TheRole::User
end
