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