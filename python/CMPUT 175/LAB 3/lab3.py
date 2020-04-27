#----------------------------------------------------
# Lab 3: Numerical Tic Tac Toe main game
# 
# Author: CMPUT 175 Team
#----------------------------------------------------

from lab3_NumTicTacToe import NumTicTacToe

def getEntry(player, entries):
    '''
    Prompts specified player for number to place on board; reprompts if that 
    number is not valid.
    Inputs:
       player (int) - number of current player (1 or 2)
       entries (list) - numbers already placed on board
    Returns: int to place on board
    '''
    if player % 2 == 0:
        numDescription = 'even'
        lowerRange = 2
        upperRange = 8        
    else:
        numDescription = 'odd'
        lowerRange = 1
        upperRange = 9         
    prompt = 'Player {}, please enter an {} number ({}-{}): '
    prompt = prompt.format(player, numDescription, lowerRange, upperRange)
    entry =input(prompt)
    return int(entry)


def getCoord(player, dimension):
    '''
    Prompts for an index value corresponding to either the row or column (as
    described by dimension) of a square on the board
    Inputs:
       player (int) - number of current player (1 or 2)
       dimension (str) - describes what the index relates to (e.g. 'row' or 'column')
    Returns: int index (either row or column)
    '''
    LOWER = 0
    UPPER = 2
    index =input('Player ' + str(player) + ', please enter a ' + dimension+': ')
    return int(index)


def isGameOver(myBoard, player):
    '''
    The game is over if the current player has won, or there are no empty squares
    left for the next player to select.
    Inputs:
       myBoard (NumTicTacToe) - object containing current state of game board
       player (int) - number of current player (1 or 2)
    Returns: True if game if over; False otherwise
    '''
    if myBoard.isWinner():
        myBoard.drawBoard()
        print ('Player', player ,"wins. Congrats!")           
        return True
    elif myBoard.boardFull():
        myBoard.drawBoard()
        print ("It's a tie.")             
        return True  
    return False


def playAgain():
    '''
    Asks if a new game should be started. A valid answer is any entry that begins
    with y/Y/n/N.
    Inputs: none
    Returns: True if a new game should start; False otherwise
    '''
    playAgain=' ' 
    # validate user's input
    while playAgain[0].upper() not in ['Y', 'N']:
        playAgain=input("Do you want to play another game? (Y/N) ")
    return playAgain[0].upper() == "Y"   


def main():
    '''
    Controls the game flow for a 2-player version of Numerical Tic Tac Toe.
    Inputs: none
    Returns: None
    '''
    newGame=True
    while newGame:
        TITLE = "Starting new Numerical Tic Tac Toe game"
        print("-"*len(TITLE))
        print (TITLE)
        print("-"*len(TITLE))
        myBoard=NumTicTacToe()
        gameOver=False
        turn = 0
        entries = []
        while not gameOver:
            myBoard.drawBoard()
            
            # get input from user
            entry = getEntry(turn+1, entries)
            row = getCoord(turn+1, 'row')
            col = getCoord(turn+1, 'column')
                                   
            # update board and check if game continues
            if myBoard.update(row, col, entry):
                entries.append(entry)
                gameOver = isGameOver(myBoard, turn+1)
                turn = (turn+1) % 2                
            # need to reprompt for new input for given player   
            else:
                print('Error: could not make move!')
                
        newGame = playAgain()
            
    print('Thanks for playing! Goodbye.')
            
if __name__ == '__main__':
    main()