require_relative 'player'


class Human_player < Player
  attr_accessor :name, :life_points, :weapon_level, :Player

  def initialize(name)
    @name = name
    @life_points = 100
    @weapon_level = 1
  end

  def show_state
    puts "#{name} a #{@life_points} points de vie et une arme de niveau #{@weapon_level}"
  end

  def compute_damage
    rand(1..6) * @weapon_level
  end

  def search_weapon
    dice = rand(1..6)
    puts "Tu as trouvé une arme de niveau #{dice}"
    if dice > @weapon_level
      puts "Elle est plus puissante que ton arme actuelle, tu la prends !"
      @weapon_level = dice
    else
      puts "Elle est moins puissante que ton arme actuelle, tu la laisses."
    end
  end

    def search_health_pack
      dice = rand(1..6)
      case dice
      when 1
        puts "Tu n'as rien trouvé"
      when 2..5
        puts "Tu as trouvé une seringue -> +50 points de vie"
        @life_points =+ 50
        if @life_points > 100
          @life_points = 100
        end
      when 6
        puts "Génial, tu as trouvé une trousse de soin -> +80 points de vie"
        @life_points =+ 80
        if @life_points > 100
          @life_points = 100
        end
      end
    end



end
