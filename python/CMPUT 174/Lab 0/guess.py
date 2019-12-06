# GuessTheNumber
# The user has to guess the number between 1 and 10.

import random

def main():
    # stores a random int between 1 and 10
    rnd = random.randint(1,10)
    
    # Display the description of the game to the user
    print("I am thinking of a number betwwen 1 and 10")
    
    # Using try-catch to catch any errors if user enters
    # any inputs other than numbers or out of range.
    try:
        # Prompts user and then take input, then parse the str to int
        u_input = int(input("What is the number? "))
        
        # Raise the exception if out of range
        if u_input not in range(1, 10): raise IndexError
        
        # Shows user the stored number and entered input
        print("The random number was " + str(rnd) + ".\nYou entered " + str(u_input))
    
    except: 
        # If exception occurs, display the lane below
        print("Wrong input.")

# Execute the main function    
main()