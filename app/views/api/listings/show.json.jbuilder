json.listing do
  json.partial! '/api/listings/listing', listing: @listing
end

json.host do
  json.partial! '/api/users/user', user: @host
end




