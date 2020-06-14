require_relative 'human_player'
require_relative 'game'



class Player
  attr_accessor :name, :life_points

  def initialize(name)
    @name = name
    @life_points = 10
  end

  def show_state
    puts "#{@name} a #{@life_points} points de vie"
  end

  def gets_damage(damage)
    @life_points = @life_points -  damage
    if @life_points <= 0
      @life_points = 0
      puts "#{@name} est décédé !"
    end
  end

  def attacks(player)
    puts "Le joueur #{@name} attaque le joueur #{player.name}"
    damage = compute_damage
    puts "il lui inflige #{damage} points de dommages"
    puts ""
    player.gets_damage(damage)
  end

  def compute_damage
    return rand(1..6)
  end

end
