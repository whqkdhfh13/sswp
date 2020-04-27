# Memory Version 1
# Display images in random order
import os
import random as rd

import pygame as pg


def main():
	# Initialize pygame
	pg.init()
	
	# create a graphical display and set the caption
	pg.display.set_caption('Memory')
	
	# MAIN GAME LOOP
	Game(pg.display.set_mode((500, 400))).play()
	
	# Terminate the game
	pg.quit()


class Tile:
	# size - width and height of each tile
	surface = None
	size = None
	images = [pg.image.load(os.path.join('images', str(x) + '.bmp')) for x in range(9)]
	
	@classmethod
	def init(cls, sf):
		# sf - surface
		cls.surface = sf
		cls.size = cls.surface.get_size()[1] / 4
	
	def __init__(self, x, y, id):
		# x - x coordinate of the image
		# y - y coordinate of the image
		# id - the index id for images from 0 to 7. Used to compare between each tiles.
		self.x = x
		self.y = y
		self.id = id
		self.is_open = False
		self.is_triggered = False
		self.set_time = None
	
	def draw(self):
		# draws the tile
		# Rect(left, top, width, height)
		# draw.rect(surface, color, rect, width=0)
		
		# draw allocated image if self.is_open is True, else, draw hidden image
		self.surface.blit(Tile.images[self.id if self.is_open else 8], (self.x, self.y))
		pg.draw.rect(Tile.images[self.id if self.is_open else 8], (0, 0, 0), pg.Rect(0, 0, Tile.size, Tile.size), 3)
	
	def trigger(self, time):
		# Set a timer so that the tile goes hidden after one second
		if self.is_triggered:
			if time - self.set_time > 1000:
				self.is_open = False
				self.is_triggered = False


class Game:
	surface = None
	
	# sets the surface
	@classmethod
	def set_surface(cls, surface):
		cls.surface = surface
	
	# returns the surface
	@staticmethod
	def get_surface(cls):
		return cls.surface
	
	def __init__(self, surface):
		# Attributes that should be in every graphical game
		self.close_clicked = False
		self.continue_game = True
		self.game_clock = None
		self.frames_per_second = 100
		self.surface = surface
		self.set_surface(self.surface)
		self.bg_color = pg.Color('black')
		self.frame_counter = 0
		self.width, self.height = self.surface.get_size()
		self.font = pg.font.SysFont('Comic Sans MS', int((self.height + self.width) / 50))
		self.curr_time = 1001
		self.show_debug_info = False
		
		# ta - temporary array to be used to randomly pick an identity number for each images
		ta = ([x for x in range(8)] * 2)
		rd.shuffle(ta)
		
		# Initialize Tile class's surface and define tile_size
		Tile.init(self.surface)
		self.tile_size = self.height / 4
		
		# Main array containing tiles
		self.main_array = [[Tile(x * self.tile_size, y * self.tile_size, ta.pop()) for y in range(4)] for x in range(4)]
		self.current_pos = None
		self.game_font = pg.font.SysFont('Comic Sans MS', int((self.height + self.width) / 15))
		
		# Variables to stop players from selecting multiple tiles
		self.set_time = 0
		self.game_started = False
	
	def play(self):
		# Play the game until the player presses the close box.
		# - self is the Game that should be continued or not.
		while not self.close_clicked:
			self.handle_events()
			self.draw()
			if self.continue_game:
				self.decide_continue()
				if self.game_started:
					self.update()
	
	def handle_events(self):
		# Handle each user event by changing the game state appropriately.
		# - self is the Game whose events will be handled
		
		events = pg.event.get()
		keys = pg.key.get_pressed()
		
		# Debugging purposes. Pressing the space bar stops the game.
		if keys[pg.K_NUMLOCK] == 1:
			self.show_debug_info = True
		else:
			self.show_debug_info = False
		
		if keys[pg.K_SPACE] == 1:
			self.continue_game = False
		
		for event in events:
			if event.type == pg.QUIT:
				self.close_clicked = True
			if event.type == pg.MOUSEBUTTONDOWN and self.continue_game:
				self.game_started = True
				self.handle_mouse_click(event)
	
	def handle_mouse_click(self, event):
		# responds to one mouse click on screen; that means changing the
		# content of a tile if it is empty.
		# - self is the game to handle a mouse click for
		# - event is the mouse click event that occurred
		
		# x, y - row, column index
		# tx, ty - location of the mouse
		tx, ty = event.pos
		x, y = (0, 0)
		
		# translating process from tx,ty to x,y
		while tx > self.tile_size or ty > self.tile_size:
			if tx > self.tile_size:
				tx -= self.tile_size
				x += 1
			if ty > self.tile_size:
				ty -= self.tile_size
				y += 1
		
		# if column number is lessed than 4, and if no tile is waiting to be hidden
		if x < 4 and self.curr_time - self.set_time > 1000:
			current_tile = self.main_array[x][y]
			
			if not current_tile.is_open:
				current_tile.is_open = True
				if self.current_pos is None:
					self.current_pos = (x, y)
				else:
					selected_tile = self.main_array[self.current_pos[0]][self.current_pos[1]]
					
					if selected_tile.id != current_tile.id:
						self.trigger(selected_tile, current_tile)
					self.current_pos = None
	
	def trigger(self, tile1, tile2):
		# It triggers the switch in each tile object, so that it goes hidden exactly after one second.
		tile1.is_triggered = True
		tile1.set_time = self.curr_time
		tile2.is_triggered = True
		tile2.set_time = self.curr_time
		self.set_time = self.curr_time
	
	def display_debug_info(self):
		# Display debugging info based on whether the NumLock is triggered or not
		text = ("T" if self.continue_game else "F") + " | " + str(
			int(self.frame_counter * 1000 / self.curr_time)) + "fps | " + str(self.frame_counter) + "frames | " + str(
			self.curr_time / 1000) + "s"
		self.surface.blit(self.font.render(text, False, (0, 0, 0)),
		                  (self.font.get_height() / 2, self.height - self.font.get_height()))
	
	def draw(self):
		# Draw all game objects.
		# - self is the Game to draw
		self.surface.fill(self.bg_color)
		
		# Loop through each surface in the main array and draw it
		[[self.main_array[i][j].draw() for j in range(4)] for i in range(4)]
		
		# Draw score to the window
		text_surface = self.game_font.render(str(int((self.curr_time - 1001) / 1000)), False, (255, 255, 255))
		Game.surface.blit(text_surface, (self.width - text_surface.get_width(), - 10))
		
		if self.show_debug_info: self.display_debug_info()
		
		pg.display.update()
	
	def update(self):
		# Update the game objects for the next frame.
		# - self is the Game to update
		
		# Define game_clock when the game starts
		if self.game_clock is None:
			self.game_clock = pg.time.Clock()
		
		# Update frame_counter, current_time and all tiles
		self.frame_counter += 1
		self.curr_time += self.game_clock.tick(self.frames_per_second)
		[[self.main_array[i][j].trigger(self.curr_time) for j in range(4)] for i in range(4)]
	
	def decide_continue(self):
		# Check and remember if the game should continue
		# - self is the Game to check
		
		# n_sum = sum indicating the status of all tiles. each tile with the revealed status increases n sum by 1
		n_sum = 0
		for row in self.main_array:
			for tile in row:
				if tile.is_open:
					n_sum += 1
		
		if n_sum == 16:
			self.continue_game = False


main()
