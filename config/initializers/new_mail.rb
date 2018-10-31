# frozen_string_literal: true

ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.smtp_settings = {
  address: 'smtp.gmail.com',
  port: 587,
  domain: 'bartcrm.org',
  user_name: 'brateq@gmail.com',
  password: 'blacmargmail',
  authentication: 'plain',
  enable_starttls_auto: true
}
