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
    email_address: "thecreator@master.com",
    password: "123456"
})

Listing.destroy_all
hope = Listing.create!({
    host_id: demo.id,
    title: "Camp Hope",
    description: "Weight loss camp for heavyweights. Come check out all the fun 
    (and enjoy all the junk food) such as go-karts and the legendary blob before
    it's too late and Tony Perkis takes it all away!",
    price: 25,
    max_capacity: 5,
    lat: 40.864753,
    lng: -73.796967,
    location: "Bronx, New York",
    check_in: "Thursday, April 19",
    check_out: "Thursday, April 26",
    site: "tent"
})
file = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_hope.jpg')
file3 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_hope1.jpg')
file4 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_hope2.jpg')
file9 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_hope3.JPG')
file10 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_hope4.jpg')
file11 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_hope5.jpg')
hope.photos.attach(io: file, filename: 'camp_hope.jpg')
hope.photos.attach(io: file3, filename: 'camp_hope1.jpg')
hope.photos.attach(io: file4, filename: 'camp_hope2.jpg')
hope.photos.attach(io: file9, filename: 'camp_hope3.jpg')
hope.photos.attach(io: file10, filename: 'camp_hope4.jpg')
hope.photos.attach(io: file11, filename: 'camp_hope5.jpg')

firewood = Listing.create!({
    host_id: demo.id,
    title: "Camp Firewood",
    description: "Wet, hot, and American! Come enjoy a fun, sometimes romantic,
    and always hilarious journey with everyone's favorite counselor crew! Avoid
    the kitchen but enjoy the activities as summer winds down to an end.", 
    price: 35,
    max_capacity: 20,
    lat: 40.743440,
    lng: -74.295977,
    location: "Essex County, New Jersey",
    check_in: "Thursday, April 19",
    check_out: "Thursday, April 26",
    site: "rv"
})
file1 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_firewood.jpg')
file5 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_firewood1.jpg')
file6 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_firewood2.jpg')
file12 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_firewood3.jpg')
file13 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_firewood4.jpg')
file14 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_firewood5.jpg')
firewood.photos.attach(io: file1, filename: 'camp_firewood.jpg')
firewood.photos.attach(io: file5, filename: 'camp_firewood1.jpg')
firewood.photos.attach(io: file6, filename: 'camp_firewood2.jpg')
firewood.photos.attach(io: file12, filename: 'camp_firewood3.jpg')
firewood.photos.attach(io: file13, filename: 'camp_firewood4.jpg')
firewood.photos.attach(io: file14, filename: 'camp_firewood5.jpg')

crystal_lake = Listing.create!({
    host_id: user.id,
    title: "Camp Crystal Lake",
    description: "Check in only on Friday the 13th. No guarantee of ever leaving. 
    Lake is off limits after a past tragedy that occurred there. The camp 
    counselors (who are still with us) are friendly. Don't let the rumors keep 
    you away!",
    price: 5,
    max_capacity: 12,
    lat: 41.255690,
    lng: -73.395061,
    location: "Weston, Connecticut",
    check_in: "Friday, September 13",
    check_out: "never",
    site: "cabin"
})
file2 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_crystal_lake.jpg')
file7 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_crystal_lake1.jpg')
file8 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_crystal_lake2.jpg')
file15 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_crystal_lake3.jpg')
file16 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_crystal_lake4.jpg')
file17 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_crystal_lake5.jpg')
crystal_lake.photos.attach(io: file2, filename: 'camp_crystal_lake.jpg')
crystal_lake.photos.attach(io: file7, filename: 'camp_crystal_lake1.jpg')
crystal_lake.photos.attach(io: file8, filename: 'camp_crystal_lake2.jpg')
crystal_lake.photos.attach(io: file15, filename: 'camp_crystal_lake3.jpg')
crystal_lake.photos.attach(io: file16, filename: 'camp_crystal_lake4.jpg')
crystal_lake.photos.attach(io: file17, filename: 'camp_crystal_lake5.jpg')

north_star = Listing.create!({
    host_id: user.id,
    title: "Camp North Star",
    description: "Practical joker? You'll love this goofball-friendly environment.
    Come check out this Canadian-inspired camp maintained by the legendary Tripper
    Harrison. Lots of fun competition awaits with the many activities available.",
    price: 18,
    max_capacity: 25,
    lat: 40.745739,
    lng: -73.843275,
    location: "Queens, New York",
    check_in: "Thursday, April 19",
    check_out: "Thursday, April 26",
    site: "cabin"
})
file18 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_white_pine.jpg')
file19 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_white_pine1.jpg')
file20 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_white_pine2.jpg')
file21 = open('https://s3.amazonaws.com/hipsterhabitat-dev/camp_white_pine3.jpg')
north_star.photos.attach(io: file18, filename: 'camp_north_star5.jpg')
north_star.photos.attach(io: file19, filename: 'camp_north_star5.jpg')
north_star.photos.attach(io: file20, filename: 'camp_north_star5.jpg')
north_star.photos.attach(io: file21, filename: 'camp_north_star5.jpg')

Amenity.create!({
    listing_id: hope.id,
    is_pets: true,
    is_campfires: true,
    is_water: true,
    is_toilets: true,
    is_showers: true,
    is_wifi: true, 
    is_hiking: true,
    is_biking: false,
    is_swimming: true,
    is_fishing: false,
    is_horseback: false,
    is_climbing: false
})

Amenity.create!({
    listing_id: firewood.id,
    is_pets: true,
    is_campfires: true,
    is_water: true,
    is_toilets: true,
    is_showers: false,
    is_wifi: false, 
    is_hiking: true,
    is_biking: true,
    is_swimming: true,
    is_fishing: false,
    is_horseback: false,
    is_climbing: true
})

Amenity.create!({
    listing_id: crystal_lake.id,
    is_pets: false,
    is_campfires: true,
    is_water: true,
    is_toilets: true,
    is_showers: true,
    is_wifi: false, 
    is_hiking: true,
    is_biking: true,
    is_swimming: true,
    is_fishing: true,
    is_horseback: true,
    is_climbing: true
})

Amenity.create!({
    listing_id: north_star.id,
    is_pets: false,
    is_campfires: false,
    is_water: false,
    is_toilets: false,
    is_showers: false,
    is_wifi: false, 
    is_hiking: true,
    is_biking: false,
    is_swimming: true,
    is_fishing: false,
    is_horseback: false,
    is_climbing: true
})