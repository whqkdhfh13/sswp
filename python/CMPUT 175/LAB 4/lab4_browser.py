#----------------------------------------------------
# Lab 4: Web browser simulator
# Purpose of program: To simulate the history function of web browser
#
# Author: Junhyeon Jayden Cho
#----------------------------------------------------

def getAction():
    """
    Get the entry from the user and return the entry if it is valid

    Returns: entry character (1st character of the input)
    """

    valid_actions = ["=", "<", ">", "q"]

    try:
        user_input = input("Enter = to enter a URL, < to go back, > to go forward, q to quit: ")

        if user_input in valid_actions and len(user_input) == 1:
            return user_input
        else:
            raise Exception("Unexpected input.")
        
    except:
        print("Invalid entry.")


def goToNewSite(current, pages):
    """
    Go to a new site while deleting all the pages exist
    after the current site in the history
    Inputs
        current(int): current index of the history
        pages(str[]): list that contains the history of the pages
    Returns: the last index of the "pages" list
    """
    
    # pop all the pages that exist after the current index
    [pages.pop() for x in range(len(pages) - current - 1)]
    pages.append(input("Enter the URL: "))

    return len(pages) - 1

    
def goBack(current):
    """
    Go back to the previous page if it exists
    Inputs
        current(int): current index of the history
    Returns: calculated index
    """
    
    if current == 0:
        print("Cannot go back.")
        return current

    return current - 1


def goForward(current, pages):
    """
    Go forward to the next page if it exists
    Inputs
        current(int): current index of the history
        pages(str[]): list that contains the history of the pages
    Returns: calculated index
    """
    
    if current + 1 == len(pages):
        print("Cannot go forward.")
        return current

    return current + 1


def main():
    """
    Controls main flow of web browser simulator
    Inputs: N/A
    Returns: None
    """
    
    HOME = 'www.cs.ualberta.ca'
    websites = [HOME]
    currentIndex = 0
    quit = False
    
    while not quit:
        print('\nCurrently viewing', websites[currentIndex])
        action = getAction()
        
        if action == '=':
            currentIndex = goToNewSite(currentIndex, websites)
        elif action == '<':
            currentIndex = goBack(currentIndex)
        elif action == '>':
            currentIndex = goForward(currentIndex, websites)
        elif action == 'q':
            quit = True
    
    print('Browser closing...goodbye.')    

        
if __name__ == "__main__":
    main()
