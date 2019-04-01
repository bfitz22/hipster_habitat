# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
demo = User.create({
    password: "123456",
    first_name: "Yogi",
    last_name: "Bear",
    email_address: "yogibear@picnicbasket.com"
})

user = User.create({
    first_name: "Brian",
    last_name: "Fitz",
    email_address: "donut360",
    password: "123456"
})

Listing.destroy_all
hope = Listing.create!({
    host: user,
    title: "Camp Hope",
    description: "Weight loss camp for heavyweights",
    price: 25,
    pets_allowed: true,
    campfires_allowed: true, 
    is_water: true,
    is_toilets: true,
    is_showers: true,
    is_wifi: true,
    max_capacity: 5,
    lat: 41.197249,
    lng: -74.116457
})

firewood = Listing.create!({
    host: user,
    title: "Camp Firewood",
    description: "Wet, hot, and American",
    price: 35,
    pets_allowed: true,
    campfires_allowed: true, 
    is_water: false,
    is_toilets: false,
    is_showers: false,
    is_wifi: false,
    max_capacity: 20,
    lat: 41.243008,
    lng: -73.582051
})

crystal_lake = Listing.create!({
    host: user,
    title: "Camp Crystal Lake",
    description: "Check in on Friday the 13th",
    price: 5,
    pets_allowed: true,
    campfires_allowed: true, 
    is_water: true,
    is_toilets: true,
    is_showers: true,
    is_wifi: false,
    max_capacity: 12,
    lat: 40.712619,
    lng: -74.453328
})

ListingPhoto.create!({
    listing: hope,
    img_url: "%w(/assets/camp_hope.jpg)"
})

ListingPhoto.create!({
    listing: firewood,
    img_url: %w(/assets/camp_firewood.jpg)
})

ListingPhoto.create!({
    listing: crystal_lake,
    img_url: %w(/assets/camp_crystal_lake.jpg)
})