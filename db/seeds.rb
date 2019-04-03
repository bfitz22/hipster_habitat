# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

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
    host: demo,
    title: "Camp Hope",
    description: "Weight loss camp for heavyweights. Come check out all the fun 
    (and enjoy all the junk food) such as go-karts and the legendary blob before
    it's too late and Tony Perkis takes it all away!",
    price: 25,
    pets_allowed: true,
    campfires_allowed: true, 
    is_water: true,
    is_toilets: true,
    is_showers: true,
    is_wifi: true,
    max_capacity: 5,
    lat: 40.864753,
    lng: -73.796967,
    location: "Bronx, New York"
})
file = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_hope.jpg')
file3 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_hope1.jpg')
file4 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_hope2.jpg')
hope.photos.attach(io: file, filename: 'camp_hope.jpg')
hope.photos.attach(io: file3, filename: 'camp_hope1.jpg')
hope.photos.attach(io: file4, filename: 'camp_hope2.jpg')

firewood = Listing.create!({
    host: user,
    title: "Camp Firewood",
    description: "Wet, hot, and American! Come enjoy a fun, sometimes romantic,
    and always hilarious journey with everyone's favorite counselor crew! Avoid
    the kitchen but enjoy the activities as summer winds down to an end.", 
    price: 35,
    pets_allowed: true,
    campfires_allowed: true, 
    is_water: false,
    is_toilets: false,
    is_showers: false,
    is_wifi: false,
    max_capacity: 20,
    lat: 40.743440,
    lng: -74.295977,
    location: "Essex County, New Jersey"
})
file1 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_firewood.jpg')
file5 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_firewood1.jpg')
file6 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_firewood2.jpg')
firewood.photos.attach(io: file1, filename: 'camp_firewood.jpg')
firewood.photos.attach(io: file5, filename: 'camp_firewood1.jpg')
firewood.photos.attach(io: file6, filename: 'camp_firewood.jpg')

crystal_lake = Listing.create!({
    host: user,
    title: "Camp Crystal Lake",
    description: "Check in only on Friday the 13th. No guarantee of ever leaving. 
    Lake is off limits after a past tragedy that occurred there. The camp 
    counselors (who are still with us) are friendly. Don't let the rumors keep 
    you away!",
    price: 5,
    pets_allowed: true,
    campfires_allowed: true, 
    is_water: true,
    is_toilets: true,
    is_showers: true,
    is_wifi: false,
    max_capacity: 12,
    lat: 41.255690,
    lng: -73.395061,
    location: "Weston, Connecticut"
})
file2 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_crystal_lake.jpg')
file7 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_crystal_lake1.jpg')
file8 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_crystal_lake2.jpg')
crystal_lake.photos.attach(io: file2, filename: 'camp_crystal_lake.jpg')
crystal_lake.photos.attach(io: file7, filename: 'camp_crystal_lake1.jpg')
crystal_lake.photos.attach(io: file8, filename: 'camp_crystal_lake2.jpg')