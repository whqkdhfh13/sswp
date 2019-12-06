# Word Puzzle Version 1

# 1 life. A word is given without the first letter, 
# and the player has to guess the first letter.

import random, os

def main():
    # Initial variables setup
    file_list = ['instructions.txt', 'words.txt']
    words = ['apple', 'banana', 'watermelon', 'kiwi', 'pineapple', 'mango']
    
    # Random word is choosed in the list
    answer = random.choice(words)
    
    # Display the instructions
    print(open(file_list[0], 'r').read()) 
    # Since the instruction is used only once in the program, 
    # I did not assign a name to it
    
    # Display the answer
    print("The answer so far is _" + answer[1:])
    
    # Take the guess
    guess = input("Guess a letter: ")
    
    # Saved messages so the following line doesn't look overcomplicated
    correct_message = "Good job! You found the word"
    incorrect_message = "Not quite, the correct words was"
    
    # If the guessed letter is right, print out correct_message.
    # Else, print out incorrect_message.
    print(correct_message if guess[0].lower() == answer[0] else incorrect_message, answer + "!")
    
    # Terminate the game 
    input("Press enter to end the game.")
    
main()