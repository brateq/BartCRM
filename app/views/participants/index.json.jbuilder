json.array!(@participants) do |participant|
  json.extract! participant, :id, :role, :amount, :contact_id, :training_id, :company_id
  json.url participant_url(participant, format: :json)
end
