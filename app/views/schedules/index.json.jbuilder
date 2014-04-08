json.array!(@schedules) do |schedule|
  json.extract! schedule, :id, :type, :subject, :time, :company_id, :contact_id, :user_id
  json.url schedule_url(schedule, format: :json)
end
