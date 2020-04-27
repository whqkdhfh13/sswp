# ----------------------------------------------------
# Assignment 2: Tic Tac Toe classes
# 
# Author: Junhyeon Jayden Cho
# References: lab3(self)
# ----------------------------------------------------


class NumTicTacToe:
	size = 3  # number of columns and rows of the board
	
	def __init__(self):
		"""
		Initializes an empty Numerical Tic Tac Toe board.
		Inputs: none
		Returns: None
		"""
		# list of lists, where each internal list represents a row
		self.board = [[int(0) for x in range(self.size)] for y in range(self.size)]
		self.current_player = 1
	
	def drawBoard(self):
		"""
		Displays the current state of the board, formatted with column and row
		indices shown.
		Inputs: none
		Returns: None
		"""
		s = " " * self.size
		divider = "  " + "-" * 11
		lines = [s + s.join([str(x) for x in range(self.size)])]
		table = [[x if x != 0 else " " for x in y] for y in self.board]
		for i in range(self.size):
			lines.append("{0}  {1} | {2} | {3}".format(i, table[i][0], table[i][1], table[i][2]))
			if i < 2:
				lines.append(divider)
		for each_line in lines:
			print(each_line)
	
	def squareIsEmpty(self, row, col):
		"""
		Checks if a given square is "empty", or if it already contains a number
		greater than 0.
		Inputs:
		   row (int) - row index of square to check
		   col (int) - column index of square to check
		Returns: True if square is "empty"; False otherwise
		"""
		return self.board[row][col] == 0
	
	def update(self, row, col, mark):
		"""
		Assigns the integer, mark, to the board at the provided row and column,
		but only if that square is empty.
		Inputs:
		   row (int) - row index of square to update
		   col (int) - column index of square to update
		   mark (int) - entry to place in square
		Returns: True if attempted update was successful; False otherwise
		"""
		try:
			if not self.squareIsEmpty(row, col):
				raise Exception("Error: The target cell is not empty.")
			
			for each_row in self.board:
				if mark in each_row:
					raise Exception("Error: The entry has already been used in the board.")
		
		except Exception as e:
			print(e)
			return False
		
		self.board[row][col] = mark
		self.current_player = 1 if self.current_player == 0 else 0
		return True
	
	def boardFull(self):
		"""
		Checks if the board has any remaining "empty" squares.
		Inputs: none
		Returns: True if the board has no "empty" squares (full); False otherwise
		"""
		for row in range(self.size):
			for col in range(self.size):
				if self.squareIsEmpty(row, col): return False
		
		return True
	
	def isWinner(self):
		"""
		Checks whether the current player has just made a winning move.  In order
		to win, the player must have just completed a line (of 3 squares) that
		adds up to 15. That line can be horizontal, vertical, or diagonal.
		Inputs: none
		Returns: True if current player has won with their most recent move;
				 False otherwise
		"""
		sum_lines = []
		for each_row in self.board:
			if 0 not in each_row: sum_lines.append(sum(each_row))
		
		for each_column in range(self.size):
			line = [self.board[i][each_column] for i in range(self.size)]
			if 0 not in line: sum_lines.append(sum(line))
		
		d1 = [self.board[i][i] for i in range(self.size)]
		d2 = [self.board[i][2 - i] for i in range(self.size)]
		if 0 not in d1: sum_lines.append(sum(d1))
		if 0 not in d2: sum_lines.append(sum(d2))
		
		return 15 in sum_lines
	
	def isNum(self):
		"""
		Checks whether this is a Numerical Tic Tac Toe board or not
		Inputs: none
		Returns: True
		"""
		return True
	
	def inTheBoard(self, num):
		for each_line in self.board:
			if num in each_line:
				return True
		
		return False


class ClassicTicTacToe:
	size = 3
	
	def __init__(self):
		"""
		Initializes an empty Classic Tic Tac Toe board.
		Inputs: none
		Returns: None
		"""
		# list of lists, where each internal list represents a row
		self.board = [[int(0) for x in range(self.size)] for y in range(self.size)]
		self.first_player = True
	
	def drawBoard(self):
		"""
		Displays the current state of the board, formatted with column and row
		indices shown.
		Inputs: none
		Returns: None
		"""
		s = " " * self.size
		divider = "  " + "-" * 11
		lines = [s + s.join([str(x) for x in range(self.size)])]
		table = [[x if x != 0 else " " for x in y] for y in self.board]
		for i in range(self.size):
			lines.append("{0}  {1} | {2} | {3}".format(i, table[i][0], table[i][1], table[i][2]))
			if i < 2:
				lines.append(divider)
		for each_line in lines:
			print(each_line)
	
	def squareIsEmpty(self, row, col):
		"""
		Checks if a given square is "empty", or if it already contains an X or O.
		Inputs:
		   row (int) - row index of square to check
		   col (int) - column index of square to check
		Returns: True if square is "empty"; False otherwise
		"""
		return self.board[row][col] == 0
	
	def update(self, row, col, mark):
		"""
		Assigns the string, mark, to the board at the provided row and column,
		but only if that square is "empty".
		Inputs:
		   row (int) - row index of square to update
		   col (int) - column index of square to update
		   mark (str) - entry to place in square
		Returns: True if attempted update was successful; False otherwise
		"""
		if not self.squareIsEmpty(row, col):
			print("Error: The target cell is not empty.")
			return False
		
		self.board[row][col] = "X" if self.first_player else "O"
		self.first_player = False if self.first_player else True
		return True
	
	def boardFull(self):
		"""
		Checks if the board has any remaining "empty" squares.
		Inputs: none
		Returns: True if the board has no "empty" squares (full); False otherwise
		"""
		for row in range(self.size):
			for col in range(self.size):
				if self.squareIsEmpty(row, col): return False
		
		return True
	
	def checkLine(self, item, line):
		for each in line:
			if each != item:
				return False
		
		return item in ["O", "X"]
	
	def isWinner(self):
		"""
		Checks whether the current player has just made a winning move.  In order
		to win, the player must have just completed a line (of 3 squares) with
		matching marks (i.e. 3 Xs  or 3 Os). That line can be horizontal, vertical,
		or diagonal.
		Inputs: none
		Returns: True if current player has won with their most recent move;
				 False otherwise
		"""
		have_won = []
		
		for each_row in range(self.size):
			have_won.append(self.checkLine(self.board[each_row][0], self.board[each_row]))
		
		for each_column in range(self.size):
			have_won.append(self.checkLine(self.board[0][each_column], [self.board[i][each_column] for i in range(
				self.size)]))
		
		have_won.append(self.checkLine(self.board[1][1], [self.board[i][i] for i in range(self.size)]))
		have_won.append(self.checkLine(self.board[1][1], [self.board[i][2 - i] for i in range(self.size)]))
		
		return True in have_won
	
	def isNum(self):
		"""
		Checks whether this is a Numerical Tic Tac Toe board or not
		Inputs: none
		Returns: False
		"""
		return False


class MetaTicTacToe:
	size = 3
	
	def __init__(self, configFile):
		"""
		Initializes an empty Meta Tic Tac Toe board, based on the contents of a
		configuration file.
		Inputs:
		   configFile (str) - name of a text file containing configuration information
		Returns: None
		"""
		file = open(configFile, 'r')
		self.board = [each_line.rstrip().split(" ") for each_line in file.readlines()]
		file.close()
		
		self.current_player = 1
	
	def drawBoard(self):
		"""
		Displays the current state of the board, formatted with column and row
		indices shown.
		Inputs: none
		Returns: None
		"""
		s = " " * self.size
		divider = "  " + "-" * 11
		lines = [s + s.join([str(x) for x in range(self.size)])]
		table = [[x for x in y] for y in self.board]
		for i in range(self.size):
			lines.append("{0}  {1} | {2} | {3}".format(i, table[i][0], table[i][1], table[i][2]))
			if i < 2:
				lines.append(divider)
		for each_line in lines:
			print(each_line)
	
	def squareIsEmpty(self, row, col):
		"""
		Checks if a given square contains a non-played local game board ("empty"),
		or the result of a played local game board (not "empty").
		Inputs:
		   row (int) - row index of square to check
		   col (int) - column index of square to check
		Returns: True if square is "empty"; False otherwise
		"""
		return self.board[row][col] in ["n", "c"]
	
	def update(self, row, col, result):
		"""
		Assigns the string, result, to the board at the provided row and column,
		but only if that square is "empty".
		Inputs:
		   row (int) - row index of square to update
		   col (int) - column index of square to update
		   result (str) - entry to place in square
		Returns: True if attempted update was successful; False otherwise
		"""
		if not self.squareIsEmpty(row, col):
			print("The target cell is not empty.")
			return False
		
		self.board[row][col] = result
		self.current_player = 1 if self.current_player == 0 else 0
		return True
	
	def boardFull(self):
		"""
		Checks if the board has any remaining "empty" squares (i.e. any un-played
		local boards).
		Inputs: none
		Returns: True if the board has no "empty" squares (full); False otherwise
		"""
		for row in range(self.size):
			for col in range(self.size):
				if self.squareIsEmpty(row, col):
					return False
		
		return True
	
	def checkLine(self, line):
		return "".join(line) in ["X" * 3, "O" * 3, "D" * 3]
	
	def isWinner(self):
		"""
		Checks whether the current player has just made a winning move.  In order
		to win, the player must have just completed a line (of 3 squares) of their
		mark (three Xs for Player 1, three Os for Player 2), or 3 draws. That line
		can be horizontal, vertical, or diagonal.
		Inputs: none
		Returns: True if current player has won with their most recent move;
				 False otherwise
		"""
		have_won = []
		
		for each_row in range(self.size):
			have_won.append(self.checkLine(self.board[each_row]))
		
		for each_column in range(self.size):
			have_won.append(self.checkLine([self.board[i][each_column] for i in range(
				self.size)]))
		
		have_won.append(self.checkLine([self.board[i][i] for i in range(self.size)]))
		have_won.append(self.checkLine([self.board[i][2 - i] for i in range(self.size)]))
		
		return True in have_won
	
	def getLocalBoard(self, row, col):
		"""
		Returns the instance of the empty local board at the specified row, col
		location (i.e. either ClassicTicTacToe or NumTicTacToe).
		Inputs:
		   row (int) - row index of square
		   col (int) - column index of square
		Returns: instance of appropriate empty local board if un-played;
				 None if local board has already been played
		"""
		if self.board[row][col] == "c":
			return ClassicTicTacToe()
		elif self.board[row][col] == "n":
			return NumTicTacToe()
		else:
			return None
	
	def getInput(self, player_number, entity, lower_limit = 0, upper_limit = 2, isnum = False):
		error_message = ""
		current_player = 2 - player_number
		
		while True:
			try:
				user_input = int(
					input("{0}Player {1}, please enter {2}: ".format(error_message, current_player, entity))
				)
				
				if isnum and user_input % 2 != player_number:
					raise ZeroDivisionError()
				
				if lower_limit <= user_input <= upper_limit:
					return user_input
				else:
					raise IndexError()
			
			except IndexError:
				error_message = "Error: " + ("entry" if isnum else entity) + " not in correct range. "
			except ZeroDivisionError:
				error_message = "Error: entry not %s" % ("odd" if player_number == 1 else "even") + ". "
			except:
				error_message = "Error: wrong input type. "
	
	def play(self):
		divider = "-" * 34
		print(divider + "\nStarting new Meta Tic Tac Toe game\n" + divider)
		
		while not (self.boardFull() or self.isWinner()):
			self.drawBoard()
			
			current_row = self.getInput(self.current_player, "a row")
			current_col = self.getInput(self.current_player, "a column")
			
			current_game = self.getLocalBoard(current_row, current_col)
			current_player = self.current_player
			
			if current_game is None:
				print("Error: the game has already been played.")
			else:
				print(divider + "\nThis is a %s Tic Tac Toe." % ("Numerical" if current_game.isNum() else "Classical"))
				
				while not (current_game.boardFull() or current_game.isWinner()):
					current_game.drawBoard()
					
					update_successful = False
					
					while not update_successful:
						if current_game.isNum():
							temp = "an " + ("odd" if current_game.current_player == 1 else "even") + " number (1-9)"
							entry = self.getInput(current_player, temp, 1, 9, True)
							while current_game.inTheBoard(entry):
								entry = self.getInput(current_player, temp, 1, 9, True)
						else:
							entry = 0
						
						update_successful = current_game.update(
							self.getInput(current_player, "a row"),
							self.getInput(current_player, "a column"),
							entry
						)
					
					if update_successful:
						current_player = 0 if current_player == 1 else 1
				
				if current_game.isWinner():
					current_player = 0 if current_player == 1 else 1
					print("Player %s wins. Congrats!" % (2 - current_player))
					self.update(current_row, current_col, "X" if current_player == 1 else "O")
				else:
					print("It's a tie.")
					self.update(current_row, current_col, "D")
				
				# alternate self.current_player
				self.current_player = 0 if current_player == 1 else 1
		
		if self.isWinner():
			self.current_player = 0 if self.current_player == 1 else 1
			winner = 2 - self.current_player
			print("Player %s wins the Meta Tic Tac Toe game. GOOD GAME!")
			
			play_again = ""
			while not (play_again in ["Y", "N"]):
				play_again = input("Do you want to play another game? (Y/N)").upper()
			
			if play_again == "Y":
				return True
			else:
				return False


if __name__ == "__main__":
	# TEST EACH CLASS THOROUGHLY HERE
	
	def for_test(num, func_name, input_bool):
		print("|{0}| {1} function".format(num, func_name))
		assert input_bool, "!!ERROR!!" + str(num) + " not working"
	
	
	test_successful = True
	
	try:
		nt = NumTicTacToe()
		for_test(1, "empty array", not False in [[nt.squareIsEmpty(x, y) for y in range(3)] for x in range(3)])
		for_test(2, "winner", not nt.isWinner())
		for_test(3, "board full", not nt.boardFull())
		# Tested if update functions stops the second player from entering an odd number
		for_test(4, "update", nt.update(0, 0, 1) and nt.update(0, 1, 2))
		for_test(5, "empty and isNum", not nt.squareIsEmpty(0, 0) and not nt.squareIsEmpty(0, 1) and nt.isNum())
		nt.board = [[3, 4, 1], [0, 2, 6], [7, 8, 9]]
		for_test(6, "draw", True)
		nt.drawBoard()
		for_test(7, "board full", nt.update(1, 0, 5) and nt.boardFull())
		for_test(8, "winner", nt.isWinner())
	except Exception as e:
		print(e)
		test_successful = False
	else:
		print("NumTTT working correctly\n")
	
	try:
		ct = ClassicTicTacToe()
		for_test(1, "empty array", not False in [[ct.squareIsEmpty(x, y) for y in range(3)] for x in range(3)])
		for_test(2, "winner", not ct.isWinner())
		for_test(3, "board full", not ct.boardFull())
		for_test(4, "update", ct.update(0, 0, 1) and ct.update(0, 1, 3) and not ct.update(0, 1, 2))
		for_test(5, "empty and isNum", not ct.squareIsEmpty(0, 0) and ct.squareIsEmpty(0, 2) and not ct.isNum())
		ct.board = [["X", "X", "O"], ["O", "O", "X"], ["X", "O", "O"]]
		for_test(6, "draw", True)
		ct.drawBoard()
		ct.board[1][0] = "X"
		for_test(7, "board full", ct.boardFull())
		for_test(8, "winner", ct.isWinner())
	except Exception as e:
		print(e)
		test_successful = False
	else:
		print("ClassicTTT working correctly\n")
	
	try:
		mt = MetaTicTacToe("MetaTTTconfig.txt")
		for_test(1, "empty array", not False in [[mt.squareIsEmpty(x, y) for y in range(3)] for x in range(3)])
		for_test(2, "winner", not mt.isWinner())
		for_test(3, "board full", not mt.boardFull())
		for_test(4, "update", mt.update(0, 0, "X") and mt.update(0, 1, "X") and not mt.update(0, 1, 2))
		for_test(5, "empty", not mt.squareIsEmpty(0, 0) and mt.squareIsEmpty(0, 2))
		mt.board = [["D", "X", "O"], ["O", "O", "X"], ["D", "O", "O"]]
		for_test(6, "draw", True)
		mt.drawBoard()
		mt.board[1][0] = "D"
		for_test(7, "board full", mt.boardFull())
		for_test(8, "winner", mt.isWinner())
	except Exception as e:
		print(e)
		test_successful = False
	else:
		print("MetaTTT working correctly\n")
	
	print("Test " + "Successful" if test_successful else "FAILED", "!")
