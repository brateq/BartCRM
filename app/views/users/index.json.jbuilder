json.array!(@users) do |user|
  json.extract! user, :id, :username, :password, :name, :surname, :email, :phone, :role_id
  json.url user_url(user, format: :json)
end
