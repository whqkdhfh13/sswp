# Pygame Template by Jayden
import pygame as pg


class Game:
    def __init__(self, surface):
        # Attributes that should be in every graphical game 
        self.close_clicked = False
        self.continue_game = True
        self.game_clock = pg.time.Clock()
        self.frames_per_second = 60
        self.surface = surface
        self.bg_color = pg.Color('black')
        self.frame_counter = 0
        self.width, self.height = self.surface.get_size()
        self.font = pg.font.SysFont('Comic Sans MS', int((self.height + self.width) / 50))
        self.curr_time = self.curr_time = self.game_clock.tick(self.frames_per_second)
        self.show_debug_info = False
                
    def play(self):
        while not self.close_clicked:
            self.handle_events()
            self.draw()
            if self.continue_game:
                self.update()
                self.decide_continue()
                        
    def handle_events(self):
        events = pg.event.get()
        keys = pg.key.get_pressed()

        if keys[pg.K_NUMLOCK] == 1:
            self.show_debug_info = True
        else:
            self.show_debug_info = False

        if keys[pg.K_SPACE] == 1:
            self.continue_game = False

        for event in events:
            if event.type == pg.QUIT:
                self.close_clicked = True
                
    def display_debug_info(self):
        text = ("T" if self.continue_game else "F") + " | " + str(int(self.frame_counter * 1000 / self.curr_time)) + "fps | " + str(self.frame_counter) + "frames | " + str(self.curr_time / 1000) + "s"
        self.surface.blit(self.font.render(text, False, (255, 255, 255)), (self.font.get_height() / 2, self.height - self.font.get_height()))
                
    def draw(self):
        self.surface.fill(self.bg_color)        
        if self.show_debug_info:
            self.display_debug_info()

        pg.display.update()
        
    def update(self):
        self.frame_counter += 1
        self.curr_time += self.game_clock.tick(self.frames_per_second)
        
    def decide_continue(self):
        # Example end of game condition
        if False:
            self.continue_game = False
    

def main():
    # Initialize pygame
    pg.init()
    # create a graphical display and set the caption
    pg.display.set_caption('Template')  
   
    # MAIN GAME LOOP 
    Game(pg.display.set_mode((800, 600))).play()
               
    pg.quit()

main()


