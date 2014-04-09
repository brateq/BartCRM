json.array!(@trainings) do |training|
  json.extract! training, :id, :topic, :price, :start, :end, :training_code, :user_id, :description, :stage, :place, :company_id
  json.url training_url(training, format: :json)
end
