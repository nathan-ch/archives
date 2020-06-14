class Game
  attr_accessor :enemies_in_sight, :player, :bot_left, :i_name

  def initialize(player_name)
    @player = Human_player.new(player_name)
    @bot_left = 10
    @enemies_in_sight = []
    @i_name=0
  end

  def is_still_ongoing
    if @player.life_points > 0 && (@enemies_in_sight.size > 0 || @bot_left > 0)
      return true
    else return false
    end
  end

  def new_player_in_sight
    if @bot_left > 0
      puts "Tu regardes si de nouveaux adversaires approchent ..."
      number_of_new_enemies = rand(1..6)
      if number_of_new_enemies >=5
        puts "Deux nouveaux enemies rejoignent le combat !"
        enemie = @i_name
        enemie = Player.new("bot#{@i_name}")
        @enemies_in_sight << enemie
        @i_name += 1
        @bot_left -= 1
        enemie = @i_name
        enemie = Player.new("bot#{@i_name}")
        @enemies_in_sight << enemie
        @i_name += 1
        @bot_left -= 1
        puts "tu aperçois 2 nouveaux enemies qui rejoignent le combat! ."
      elsif number_of_new_enemies >= 2 || number_of_new_enemies <= 4
          puts "Un nouvel enemie rejoint le combat !"
          enemie = @id_name
          enemie = Player.new("bot#{@i_name}")
          @enemies_in_sight << enemie
          @i_name+=1
          @bot_left -= 1
      else puts "bot_let = #{@bot_left} et enemies_in_sight = #{enemies_in_sight.size}"
      end
    end
  end


  def kill_player(player)
    @enemies_in_sight.delete(player)
  end

  def show_players
    puts ""
    @player.show_state
    puts "Il te reste #{@enemies_in_sight.size} énemies à tuer !"
  end

  def menu
    puts ""
    puts "Quelle action veux-tu effectuer ?

    a - chercher une meilleure arme
    s - chercher à se soigner

    attaquer un joueur en vue :"
    i=0
    @enemies_in_sight.each{ |enemie|
      if enemie.life_points <= 0
        kill_player(enemie)
      else
        puts "    #{i} - #{enemie.name} a #{enemie.life_points} points de vie"
      i=i+1 end}
    end

    def menu_choice(choice)
      if choice == "a"
        @player.search_weapon
      elsif choice == "s"
        @player.search_health_pack
      else
      @enemies_in_sight.each_with_index{ |enemie, index|
        if choice.to_i == index
        @player.attacks(enemie)
          if enemie.life_points <=0
            kill_player(enemie)
          end
        end}
      # else choice =! "a" || choice =! "s" || choice =! [0..enemies_in_sight.size]
      #   self.menu_choice
      end
    end

    def enemies_attacks
      if @player.life_points > 0
        @enemies_in_sight.each{ |enemie|
          if @player.life_points > 0
            enemie.attacks(@player)
          else
          end}
      end
    end

    def end_of_game
      if @player.life_points > 0
        puts "Bravo tu as gagné"
      else puts "Tu es mort"
      end
    end
end
