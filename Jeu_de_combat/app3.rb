require 'bundler'
Bundler.require

require_relative 'lib/game'
require_relative 'lib/human_player'
require_relative 'lib/player'

puts "Bienvenu dans ce super jeu"
puts "Quel est ton nom ?"
print ">"
name = gets.chomp
my_game = Game.new(name)

while my_game.is_still_ongoing == true
  puts `clear`
  my_game.show_players
  puts""
  my_game.new_player_in_sight
  my_game.menu
  choice = gets.chomp
  my_game.menu_choice(choice)
  puts ""
  my_game.enemies_attacks
end

my_game.end_of_game
