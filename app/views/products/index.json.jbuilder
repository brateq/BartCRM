json.array!(@products) do |product|
  json.extract! product, :id, :name, :price, :start, :end, :code, :user_id, :description, :stage, :place, :category
  json.url product_url(product, format: :json)
end
