require 'bundler'
Bundler.require

require_relative 'lib/game'
require_relative 'lib/player'
require_relative 'lib/human_player'

puts "
------------------------------------------------
|Bienvenue sur 'ILS VEULENT TOUS MA POO' !      |
|Le but du jeu est d'être le dernier survivant !|
-------------------------------------------------"

puts "Quel est ton nom ?"
print ">"
player = Human_player.new(gets.chomp)

bot1 = Player.new("jojo")
bot2 = Player.new("toto")

enemies = []
enemies << bot1 << bot2
while player.life_points > 0 && (bot1.life_points>0 || bot2.life_points >0)
  player.show_state
  puts "
  Quelle action veux-tu effectuer ?

a - chercher une meilleure arme
s - chercher à se soigner

attaquer un joueur en vue :
0 - #{bot1.name} a #{bot1.life_points} points de vie
1 - #{bot2.name} a #{bot2.life_points} points de vie"

  choice = gets.chomp
  if choice == "a"
    player.search_weapon
  elsif choice == "s"
    player.search_health_pack
  elsif choice == "0"
    player.attacks(bot1)
  elsif choice == "1"
    player.attacks(bot2)
  else
    puts "saisie incorect, tu passes ton tour"
  end

  puts "Les autres joueurs t'attaquent"
  enemies.each{ |enemie|
  if enemie.life_points > 0
    enemie.attacks(player)
  end}
end



if player.life_points > 0
  puts "Bravo tu as gagné !"
else puts "Tu as perdu !"
end
