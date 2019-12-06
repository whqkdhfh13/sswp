# Pong Version 3
# Add responses to the keyboard input.
import pygame as pg


class Paddle:
    # Class for a paddle instance
    # coordinates = (x, y)
    # size = (w, h)
    # surface = surface of the program
    def __init__(self, coordinates, size, surface):
        self.location = coordinates
        self.size = size
        self.surface = surface
        self.up = 0
        self.down = 0

    def draw(self):  # Draw its object
        pg.draw.rect(self.surface, pg.Color('white'), pg.Rect(self.location[0], self.location[1], self.size[0], self.size[1]))

    def move(self):  # Control its object's movement

        # if self.up = 1, then it means up key of the object is currently pressed; thus, move upward.
        if self.up == 1 and self.location[1] > 0:
            self.location[1] -= 1
        if self.down == 1 and self.location[1] + self.size[1] < self.surface.get_height():
            self.location[1] += 1


class Ball:
    # Class for a ball instance
    # center = (x, y)
    # radius = r
    # velocity = (x_speed, y_speed)
    # surface = surface of the program
    def __init__(self, center, radius, velocity, surface):
        self.center = center
        self.radius = radius
        self.velocity = velocity
        self.surface = surface

    def draw(self):  # Draw its object
        pg.draw.circle(self.surface, pg.Color(255, 255, 255), self.center, self.radius)

    def move(self):  # Control its object's movement
        for i in range(0, 2):
            self.center[i] = self.center[i] + self.velocity[i]
            if self.center[i] < self.radius:
                self.velocity[i] *= -1
            if self.center[i] > self.surface.get_size()[i] - self.radius:
                self.velocity[i] *= -1


class Game:
    def __init__(self, surface):
        # Attributes that should be in every graphical game 
        self.close_clicked = False
        self.continue_game = True
        self.surface = surface
        self.width = self.surface.get_size()[0]
        self.height = self.surface.get_size()[1]
        self.bg_color = pg.Color('black')
        self.frame_counter = 0
        self.frames_per_second = 316
        self.myfont = pg.font.SysFont('Comic Sans MS', int(self.height / 20))

        # Attributes that are specific to the game
        self.ball = Ball([400, 300], 10, [2, 1], self.surface)
        w = self.surface.get_size()[0] / 60  # Custom variable for w and h size of paddles
        h = self.surface.get_size()[1] / 10
        self.paddle1 = Paddle([self.width / 5, self.height / 2 - h / 2], [w, h], self.surface)
        self.paddle2 = Paddle([self.width * 4 / 5, self.height / 2 - h / 2], [w, h], self.surface)
        self.score1 = 0
        self.score2 = 0

        # Time-related variables
        self.start_time = pg.time.get_ticks()
        self.curr_time = pg.time.get_ticks()
        self.game_clock = pg.time.Clock()

    def play(self):  # Main function for Game class
        while not self.close_clicked:
            self.handle_events()
            self.draw()
            if self.continue_game:
                self.update()
                self.decide_continue()

    def handle_events(self):  # Handle events and inputs
        events = pg.event.get()
        keys = pg.key.get_pressed()

        # keys[pg.K_key] returns 0 for false and 1 for true based on whether the key is currently pressed or not.
        # Assign the value directly to the object and handle events inside the method of that object.
        self.paddle1.up = keys[pg.K_q]
        self.paddle1.down = keys[pg.K_a]
        self.paddle2.up = keys[pg.K_p]
        self.paddle2.down = keys[pg.K_l]

        for event in events:
            if event.type == pg.QUIT:
                self.close_clicked = True

    def display_debug_info(self):  # Display debugging info
        self.surface.blit(self.myfont.render(
            str(int(self.frame_counter / self.curr_time)) + "fps | " + str(self.frame_counter) + "frames | " + str(
                self.curr_time) + "s", False, (255, 255, 255)),
            (self.width / 40, self.height - 50))

    def display_score(self):  # Display scores
        score1 = self.myfont.render(str(self.score1), False, (255, 255, 255))
        self.surface.blit(score1, (0, 0))
        score2 = self.myfont.render(str(self.score2), False, (255, 255, 255))
        self.surface.blit(score2, (750, 0))

    def draw(self):  # Control Drawing objects
        self.surface.fill(self.bg_color)
        # self.display_debug_info()

        # Ball
        self.ball.draw()

        # Scores
        self.display_score()

        # Two paddles
        self.paddle1.draw()
        self.paddle2.draw()

        # Update the display with newly drawn objects
        pg.display.update()

    def update(self):  # Logic part of the game
        self.game_clock.tick(self.frames_per_second)
        self.frame_counter = self.frame_counter + 1
        self.curr_time = (pg.time.get_ticks() - self.start_time) / 1000

        # Ball
        self.ball.move()

        # Paddles
        self.paddle1.move()
        self.paddle2.move()

        # Score
        if self.ball.center[0] < self.ball.radius:
            self.score2 += 1
        if self.ball.center[0] > self.surface.get_size()[0] - self.ball.radius:
            self.score1 += 1

        # Ball bouncing from paddles.
        change_direction = True
        for i in range(0, 2):  # if i = 0, it checks for x and w. if i = 1, it checks for y and h.
            if (not (self.ball.velocity[0] < 0  # if heading left
                and self.ball.center[i] + self.ball.radius > self.paddle1.location[i]
                and self.ball.center[i] - self.ball.radius < self.paddle1.location[i] + self.paddle1.size[i]
                or self.ball.velocity[0] > 0  # if heading right
                and self.ball.center[i] + self.ball.radius > self.paddle2.location[i]
                and self.ball.center[i] - self.ball.radius < self.paddle2.location[i] + self.paddle2.size[i])):
                    # Change the direction
                    change_direction = False
        if change_direction:
            self.ball.velocity[0] *= -1

    def decide_continue(self):
        # Example end of game condition
        if self.score1 == 11 or self.score2 == 11:
            self.continue_game = False


def main():
    # Initialize pygame
    pg.init()
    # create a graphical display and set the caption
    pg.display.set_caption('Pong')

    # MAIN GAME LOOP 
    Game(pg.display.set_mode((800, 600))).play()

    pg.quit()


main()
