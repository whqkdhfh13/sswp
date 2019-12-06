# Word Puzzle Version 3
# 4 guesses. The user guesses one letter at a time. If correct, 

import random

# Display the instructions; None
# filename = Str; filename
def display_instructions(filename): 
    print(open(filename, 'r').read())

# Display the current progress; None
# puzzle = list; list containing encrypted letters
def display_puzzle_string(puzzle): 
    print("The answer so far is " + ' '.join(puzzle))

# Main loop of the game that includes execution of other user-defined function; Boolean
# progress = list; a list containing encrypted letters
# answer = Str; the final answer
def play_game(progress, answer): 
    # Init Var
    remaining_guess = 4

    display_instructions('instructions.txt')

    while remaining_guess != 0:
        display_puzzle_string(progress)

        guess = get_guess(remaining_guess)

        if not update_puzzle_string(progress, answer, guess): # if the word hasn't updated
            remaining_guess -= 1

        if is_word_found(progress):
            return True
    
    return False

# Take the guess; Str
# num_guesses = int; the number of guesses remaining
def get_guess(num_guesses):
    # [0] at the end of the line means, only take the first letter of the input
    return input("Guess a letter (" + str(num_guesses) +  " guesses remaining): ")[0]  

# Change all the characters of the answer to underbar, unless it is equal to guess; Boolean
# puzzle = list; a list representing the puzzles current state
# answer = Str; a string or list containing the answer
# guess = Str; a string containing the players most recent guessed letter
def update_puzzle_string(puzzle, answer, guess):
    i = 0
    has_found = False

    for temp_char in answer:
        if guess == temp_char:
            # if the letter already exists in the puzzle, return user back to main loop without
            # having to go through all the characters in the puzzle.
            if (puzzle[i] == guess):
                print("It looks like the guess that you have made is already in the current progress. \nPlease try again with a different guess.")
                return True

            puzzle[i] = guess
            has_found = True
        i += 1

    return has_found

# Return True if the current progress doesn't include underbar; Boolean
# puzzle = list; a list representing the puzzles current state
def is_word_found(puzzle):
    # Return False if underbar was found in any location
    if '_' in puzzle: return False

    return True

# Display the message based on whether the puzzle is completed or not; None
# is_win = Boolean; true if the player guessed the word
# answer = Str; a string or list containing the answer
def display_result(is_win, answer):
    print("Good job! You found the word" if is_win else "Not quite, the correct word was", answer + ".")
    
    # Terminate the game 
    input("Press enter to end the game.") 

def main():
    # Initial variables setup
    answer = random.choice(open('words.txt', 'r').read().split()) 

    # Duplicate the answer, to save the current progress
    progress = ['_' for temp_Str in answer]
    print(answer) # Debugging purpose, to be removed.

    # print the result, then wait for the input to terminate the game.
    display_result(play_game(progress, answer), answer) 
    
main()