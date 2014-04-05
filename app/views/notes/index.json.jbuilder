json.array!(@notes) do |note|
  json.extract! note, :id, :text, :user_id, :company_id, :contact_id
  json.url note_url(note, format: :json)
end
