# Pong Version 1
# 2 not-moving paddles. 1 ball moving around.
import pygame as pg


class Ball:
    def __init__(self,center,radius,velocity,surface):
        self.center = center
        self.radius = radius
        self.velocity = velocity
        self.surface = surface
        
    def draw(self): # Draw its object
        pg.draw.circle(self.surface,pg.Color(255, 255, 255),self.center,self.radius)
        
    def move(self): # Logic part
        for i in range(0, 2):
            self.center[i] = self.center[i] + self.velocity[i]
            if self.center[i] < self.radius: 
                self.velocity[i] *= -1
            if self.center[i] > self.surface.get_size()[i] - self.radius: 
                self.velocity[i] *= -1


class Game:
    def __init__(self,surface):
        # Attributes that should be in every graphical game 
        self.close_clicked = False
        self.continue_game = True
        self.start_time = pg.time.get_ticks()
        self.curr_time = pg.time.get_ticks()
        self.game_clock = pg.time.Clock()
        self.frames_per_second = 60
        self.surface = surface
        self.bg_color = pg.Color('black')
        self.frame_counter = 0
        self.myfont = pg.font.SysFont('Comic Sans MS', 30)
        
        # Attributes that are sepcific to the game
        self.ball = Ball([400, 300], 10, [8, 4], self.surface)
        w = self.surface.get_size()[0]/60 # Custom var for w and h size of paddle
        h = self.surface.get_size()[1]/10
        self.paddle1 = pg.Rect(self.surface.get_size()[0] / 5, self.surface.get_size()[1]/2 - h/2, w, h)
        self.paddle2 = pg.Rect(self.surface.get_size()[0] * 4 / 5, self.surface.get_size()[1]/2 - h/2, w, h)

    def play(self):
        while not self.close_clicked:
            self.handle_events()
            self.draw()
            if self.continue_game:
                self.update()
                self.decide_continue()
                        
    def handle_events(self):
        events = pg.event.get()
        for event in events:
            if event.type == pg.QUIT:
                self.close_clicked = True
                
    def draw(self):
        # Background
        self.surface.fill(self.bg_color)
        # Display info for debugging purposes
        # self.surface.blit(self.myfont.render(str(self.frame_counter) + " / " + str(int(self.frame_counter / self.curr_time)), False, (255, 255, 255)),
        #                  (10, 550)) # Location that the info is drawn

        # Ball
        self.ball.draw()
        
        # Two paddles
        pg.draw.rect(self.surface, pg.Color('white'), self.paddle1)
        pg.draw.rect(self.surface, pg.Color('white'), self.paddle2)
        
        pg.display.update()
        
    def update(self):
        self.game_clock.tick(self.frames_per_second)
        self.frame_counter = self.frame_counter + 1
        # Measure the elapsed time in second
        self.curr_time = (pg.time.get_ticks() - self.start_time) / 1000
        
        self.ball.move()

    def decide_continue(self):
        # Example end of game condition
        pass # will be added in V2
    

def main():
    # Initialize pygame
    pg.init()
    # create a graphical display and set the caption
    pg.display.set_caption('Pong')  
   
    # MAIN GAME LOOP 
    Game(pg.display.set_mode((800, 600))).play()
               
    pg.quit()

main()


