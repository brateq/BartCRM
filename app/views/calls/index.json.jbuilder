json.array!(@calls) do |call|
  json.extract! call, :id, :subject, :call_type, :time, :user_id, :company_id, :contact_id
  json.url call_url(call, format: :json)
end
