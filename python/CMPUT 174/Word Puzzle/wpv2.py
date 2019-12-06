# Word Puzzle Version 2

# 1 life. If at least 1 character is correctly guessed, 

import random, os

def print_result(var):
    # Saved messages so the following line doesn't look overcomplicated
    correct_message = "Good job! You found the word"
    incorrect_message = "Not quite, the correct words was"
            
    # If the user has guessed the right letter(var == True), print out correct_message.
    # Else, print out incorrect_message.
    print(correct_message if var else incorrect_message, answer + "!")
    
    # Terminate the game 
    input("Press enter to end the game.") 

def main():
    
    # Initial variables setup
    file_list = ['instructions.txt', 'words.txt']
    words = open(file_list[1], 'r').read().split()
    answer = random.choice(words) 
    scored = False    

    # Duplicate the answer, to save the current progress
    progress = ['_' for temp_Str in answer]
    print(answer) # Debugging purpose
    
    # Display the instructions
    print(open(file_list[0], 'r').read()) 
        
    # Display the current progress
    print("The answer so far is " + ' '.join(progress))
    
    # Take the guess
    guess = input("Guess a letter: ")
    
    # Change all the characters of the answer to underbar, unless it is equal to guess
    progress = [guess if x == guess else '_' for x in answer]
    
    # Display the current progress
    print("The answer so far is " + ' '.join(progress))
    
    # Record if the user has guessed the right letter
    if guess in progress:
        scored = True
    
    # print the result, then terminate the game.
    print_result(scored)
    
main()