#----------------------------------------------------
# Lab 3: Numerical Tic Tac Toe class
# 
# Author: 
# Collaborators:
# References:
#----------------------------------------------------

class NumTicTacToe:
    
    def __init__(self):
        '''
        Initializes an empty Numerical Tic Tac Toe board.
        Inputs: none
        Returns: None
        '''
        self.size = 3   # number of columns and rows of board
        # list of lists, where each internal list represents a row
        self.board = [[int(0) for x in range(self.size)] for y in range(self.size)]
        self.current_player = 1
    
    def drawBoard(self):
        '''
        Displays the current state of the board, formatted with column and row 
        indicies shown.
        Inputs: none
        Returns: None
        '''
        # TO DO: delete pass and print out formatted board
        # e.g. an empty board should look like this:
        #    0   1   2  
        # 0    |   |   
        #   -----------
        # 1    |   |   
        #   -----------
        # 2    |   |           
        s = " " * 3
        divider = "  " + "-" * 11
        lines = ["".join([s + str(x) for x in range(3)])]
        table = [[x if x != 0 else " " for x in y] for y in self.board]
        for i in range(len(self.board)):
            lines.append("{0}  {1} | {2} | {3}".format(i, table[i][0], table[i][1], table[i][2]))
            if i < 2:
                lines.append(divider)
        for each_line in lines:
            print(each_line)
            
    def squareIsEmpty(self, row, col):
        '''
        Checks if a given square is empty, or if it already contains a number 
        greater than 0.
        Inputs:
           row (int) - row index of square to check
           col (int) - column index of square to check
        Returns: True if square is empty; False otherwise
        '''
        # TO DO: delete pass and complete method
        return True if self.board[row][col] == 0 else False
    
    def update(self, row, col, num):
        '''
        Assigns the integer, num, to the board at the provided row and column, 
        but only if that square is empty.
        Inputs:
           row (int) - row index of square to update
           col (int) - column index of square to update
           num (int) - entry to place in square
        Returns: True if attempted update was successful; False otherwise
        '''
        # TO DO: delete pass and complete method
        if self.board[row][col] != 0:
            return False
        
        if num % 2 != self.current_player:
            return False
        
        if self.current_player == 1:
            self.current_player = 0
        else:
            self.current_player = 1
        
        for each_row in self.board:
            if num in each_row:
                return False
        
        self.board[row][col] = num
        return True
    
    def boardFull(self):
        '''
        Checks if the board has any remaining empty squares.
        Inputs: none
        Returns: True if the board has no empty squares (full); False otherwise
        '''
        # TO DO: delete pass and complete method
        for each_row in self.board:
            if 0 in each_row:
                return False
        
        return True
        
           
    def isWinner(self):
        '''
        Checks whether the current player has just made a winning move.  In order
        to win, the player must have just completed a line (of 3 squares) that 
        adds up to 15. That line can be horizontal, vertical, or diagonal.
        Inputs: none
        Returns: True if current player has won with their most recent move; 
                 False otherwise
        '''
        # TO DO: delete pass and complete method
        sum_lines = []
        for each_row in self.board:
            sum_lines.append(sum(each_row))
        
        for each_column in range(self.size):
            sum_lines.append(sum([self.board[i][each_column] for i in range(self.size)]))
        
        sum_lines.append(sum([self.board[i][i] for i in range(self.size)]))
        sum_lines.append(sum([self.board[i][2-i] for i in range(self.size)]))
        
        return True if 15 in sum_lines else False
