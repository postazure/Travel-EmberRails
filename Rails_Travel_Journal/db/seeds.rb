# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
posts = [
  {name: "This place is cool", description: "We did stuff here", photo: "http://upload.wikimedia.org/wikipedia/commons/0/05/20100726_Kalamitsi_Beach_Ionian_Sea_Lefkada_island_Greece.jpg"},
  {name: "This place is hot", description: "We did stuff here also", photo: "http://upload.wikimedia.org/wikipedia/commons/2/29/Thorn_Tree_Sossusvlei_Namib_Desert_Namibia_Luca_Galuzzi_2004a.JPG"},
]

posts.each  do |post|
  Post.create(post)
end