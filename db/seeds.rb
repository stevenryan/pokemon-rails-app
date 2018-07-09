# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
@url = 'https://pokeapi.co/api/v2/pokemon/'
@url2 = 'http://pokeapi.co/api/v2/pokemon-species/'

(1..151).each do |x|
  @pokemon = HTTParty.get(@url + x.to_s).parsed_response
  @pokemon2 = HTTParty.get(@url2 + x.to_s).parsed_response
  new_pokeman = Pokemon.create(name: @pokemon['name'], type1: @pokemon['types'][1]['type']['name'], type2: @pokemon['types'][0]['type']['name'], dexInfo: @pokemon2['flavor_text_entries'][1]['flavor_text'])
  new_pokeman.save
end
