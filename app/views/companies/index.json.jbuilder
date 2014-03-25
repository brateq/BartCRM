json.array!(@companies) do |company|
  json.extract! company, :id, :name, :www, :email, :legal_form, :phone, :street, :postcode, :city, :country, :krs, :decription, :nip, :regon, :progress, :type_of_training, :trade, :electronic_invoice, :contact_id, :user_id
  json.url company_url(company, format: :json)
end
