json.array!(@contacts) do |contact|
  json.extract! contact, :id, :name, :surname, :mobile_number, :office_number, :street, :postalcode, :city, :country, :dont_call, :newslatter, :created_by, :modified_by, :know_from, :description, :email, :user_id, :company_id
  json.url contact_url(contact, format: :json)
end
