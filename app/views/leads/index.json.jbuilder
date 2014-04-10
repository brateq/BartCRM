json.array!(@leads) do |lead|
  json.extract! lead, :id, :status, :amount, :user_id, :company_id, :training_id, :contact_id, :note_id, :schedule_id
  json.url lead_url(lead, format: :json)
end
