# Tic Tac Toe V2
# Implements basic functionality of the game, Tic Tac Toe:
# A 3x3 grid is drawn. Cliicking on empty tiles alternates between
# placing X's and O's. When a filled tile is clicked, the tile flashes.
import pygame, random


# User-defined functions

def main():
   # initialize all pygame modules (some need initialization)
   pygame.init()
   # create a pygame display window
   pygame.display.set_mode((500, 400))
   # set the title of the display window
   pygame.display.set_caption('Tic Tac Toe')   
   # get the display surface
   w_surface = pygame.display.get_surface() 
   # create a game object
   game = Game(w_surface)
   # start the main game loop by calling the play method on the game object
   game.play() 
   # quit pygame and clean up the pygame window
   pygame.quit() 


# User-defined classes

class Game:
   # An object in this class represents a complete game.

   def __init__(self, surface):
      # Initialize a Game.
      # - self is the Game to initialize
      # - surface is the display window surface object

      # === objects that are part of every game that we will discuss
      self.surface = surface
      self.bg_color = pygame.Color('black')
      
      self.FPS = 10
      self.game_Clock = pygame.time.Clock()
      self.close_clicked = False
      self.continue_game = True
      
      # === game specific objects
      self.player1 = 'X'
      self.player2 = 'O'
      self.current_player = self.player1
      
      # class attributes must be set before instances are initialized!
      Tile.set_surface(self.surface)

      self.flashing_tiles = [ ]
      self.grid_size = 3
      self.grid = [ ]
      self.create_grid(self.grid_size)
      
   def create_grid(self, grid_size):
      # Creates a grid of tiles that is grid_size by grid_size in size. Each
      # tile can be clicked on and can hold an X or an O value.
       
      # this for loop creates each row in our grid     
      for row_num in range(grid_size):
         new_row = self.create_row(row_num, grid_size)
         self.grid.append(new_row)
                  
   def create_row(self, row_num, size):
      # Create one row in a grid. Each row contains size Tiles. a row_num is
      # required for calculating the tile's x,y coordinates on screen
      #  -  row_num: the nth row of the grid being created
      #  -   size  : the number of tiles in the row 
      # returns the newly created row             
      
      tile_height = self.surface.get_height() // size
      tile_width = self.surface.get_width() // size
      one_row = [ ]
      for col_num in range(size):
         y = row_num * tile_height
         x = col_num * tile_width
         pos = (x,y)
         one_tile = Tile(pos, tile_width, tile_height)
         one_row.append(one_tile)
      return one_row

   def play(self):
      # Play the game until the player presses the close box.
      # - self is the Game that should be continued or not.

      while not self.close_clicked:  # until player clicks close box
         # play frame
         self.handle_events()
         self.draw()            
         if self.continue_game:
            self.update()
            self.decide_continue()
         self.game_Clock.tick(self.FPS) # run at most with FPS Frames Per Second

   def handle_events(self):
      # Handle each user event by changing the game state appropriately.
      # - self is the Game whose events will be handled

      events = pygame.event.get()
      for event in events:
         if event.type == pygame.QUIT:
            self.close_clicked = True
         if event.type == pygame.MOUSEBUTTONDOWN and self.continue_game:
            self.handle_mouse_click(event)
            
   def handle_mouse_click(self, event):
      # responds to one mouse click on screen; that means changing the
      # content of a tile if it is empty.
      # - self is the game to handle a mouse click for
      # - event is the mouse click event that occurred
      for row in self.grid:
         for tile in row:
            if tile.select(event.pos, self.current_player):
               self.change_turns()

   def change_turns(self):
      # changes the active player's turn to the next player
      # - self is the game we are changing the player's turn for
      if self.current_player == self.player1:
         self.current_player = self.player2
      else:
         self.current_player = self.player1
                  
   def draw(self):
      # Draw all game objects.
      # - self is the Game to draw
      
      self.surface.fill(self.bg_color) # clear the display surface first

      # give the appearance of flashing tiles by randomly selecting one from
      # the list of tiles that need to be flashing and set its flashing state
      # to True.
      if len(self.flashing_tiles) > 0:
         random_tile = random.choice(self.flashing_tiles)
         random_tile.flash()

      for row in self.grid:
         for tile in row:
            tile.draw()

      pygame.display.update() # make the updated surface appear on the display

   def update(self):
      # Update the game objects for the next frame.
      # - self is the Game to update
      pass
   
   def is_line_win(self, tiles):
      #  takes in a list of tiles that are in a line. Returns True if the tiles
      # all have the same content are are all non-empty, and returns False
      # otherwise. If all the tiles have the same content, these tiles are
      # stored on our Game so that they flash when the game is over
      line_win = True
      
      for tile in tiles:
         if tile != tiles[0]:
            line_win = False

      if line_win:
         self.flashing_tiles = tiles
         
      return line_win
   
   def is_tie(self):
      # checks if the game has ended in a tie. If so, return True. Otherwise
      # return False. If the game has ended in a tie, flash the tiles.
      # - self is the game we are checking a tie for
      
      filled_tiles = [ ]
      
      for row in self.grid:
         for tile in row:
            if not tile.is_empty():
               filled_tiles.append(tile)
               
      if len(filled_tiles) == self.grid_size ** 2:
         self.flashing_tiles = filled_tiles
         return True
      else:
         return False      
   
   def is_diagonal_win(self):
      # returns true if three equal tiles exist in a diagonal line on the
      # game board, and false otherwise.
      # - self is the game we're checking for a diagonal line win
      diagonal1 = [ ]
      diagonal2 = [ ]
      
      for index in range(0, self.grid_size):
         diagonal1.append(self.grid[index][index])
         diagonal2.append(self.grid[index][self.grid_size - index - 1])

      return self.is_line_win(diagonal1) or self.is_line_win(diagonal2)
         
   def is_vertical_win(self):
      # returns true if three equal tiles exist in a vertical line on the
      # game board, and false otherwise.
      # - self is the game we're checking for a vertical line
      vertical_win = False
      
      for col_index in range(0, self.grid_size):
         column = [ ]
         for row_index in range(0, self.grid_size):
            column.append(self.grid[row_index][col_index])
         if self.is_line_win(column):
            vertical_win = True

      return vertical_win
   
   def is_horizontal_win(self):
      # returns true if three equal tiles exist in a horizontal line on the
      # game board, and false otherwise.
      # - self is the game we're checking for a horiiizontal line
      horizontal_win = False
      
      for row in self.grid:   
         if self.is_line_win(row):
            horizontal_win = True

      return horizontal_win

   def is_win(self):
      # Returns true if there is a line of three equal tiles on the game board,
      # and false otherwise.
      # - self is the game to check a win for
      return (self.is_horizontal_win() or self.is_vertical_win() or
              self.is_diagonal_win())
   
   def decide_continue(self):
      # Check and remember if the game should continue
      # - self is the Game to check        
      if self.is_win() or self.is_tie():
         self.continue_game = False


class Tile:
   # A tile represents one location on a grid. Tiles hold content
   # (in this case, an X or an O).
     
   # class attributes that are common to all tiles
   surface = None
   fg_color = pygame.Color("white")
   bg_color = pygame.Color("black")
   border_width = 3
   font_height  = 72
   
   @classmethod
   def set_surface(cls, surface):
      # sets the class attribute, surface
      cls.surface = surface   
   
   def __init__(self, screen_position, width, height):
      # initialize one instance of our Tile class. Tiles represent
      # one 'position' in our tic-tac-toe board.
      #  - self: the tile being initialized
      #  - screen_position: the [x, y] coordinates to draw the tile at
      #  - width: the width of the tile
      #  - height: the height of the tile
      self.content = ''
      self.flashing = False
      
      # create a rectangle defining our boundaries
      x, y = screen_position
      self.rect = pygame.Rect(x, y, width, height)

   def draw_content(self):
      # this method draw's the Tile's content (X or O) to the screen
      #  - self : the Tile whose content is being drawn

      font       = pygame.font.SysFont("arial", Tile.font_height)
      text_img   = font.render(self.content, True, Tile.fg_color)
      
      text_size = font.size(self.content)
      text_width, text_height = text_size
      
      text_x = (self.rect.width - text_width) // 2 + self.rect.x
      text_y = (self.rect.height - text_height) // 2 + self.rect.y
      text_pos = (text_x, text_y)
      
      Tile.surface.blit(text_img, text_pos)
      
   def draw(self):
      # draw the contents of a tile to its surface. Contents are either an
      # X, an O, or nothing.
      #  - self: the tile being drawn
      self.draw_content()      
      if self.flashing:
         pygame.draw.rect(Tile.surface, Tile.fg_color, self.rect)
         self.flashing = False
      else:
         pygame.draw.rect(Tile.surface, Tile.fg_color, self.rect, Tile.border_width) 

   def is_empty(self):
      # Returns true if a tile's content is empty and false otherwise
      # - self is the tile whose content is being checked
      return self.content == ''
   
   def flash(self):
      # makes a tile flash once
      # - self is the tile to flash
      self.flashing = True
  
   def select(self, pos, current_player):   
      # This method checks if an [x,y] posiition is inside a tile's boundary. If
      # so, the tile's content is updated (X or O).
      #  - self : the tile being selected
      #  - pos  : the [x,y] position being checked   
      #  - current_player : The letter of the current player's turn (X or O)
      # returns True or False if select was successful
      
      selected = False
      
      if self.rect.collidepoint(pos):
         if self.content == '':
            self.content = current_player
            selected = True
         else:
            self.flash()

      return selected

   def __eq__(self, other):
      # Overloads the == operator. Two tiles are equal if they both have the
      # same content and are both non-empty.
      # - self is the reference tile
      # - other is the comparison tile
      if self.content == '':
         return False
      elif self.content == other.content:
         return True
      else:
         return False
      
main()
