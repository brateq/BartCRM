json.array!(@documents) do |document|
  json.extract! document, :id, :user_id, :company_id, :contact_id, :lead_id, :training_id
  json.url document_url(document, format: :json)
end
