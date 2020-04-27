# ----------------------------------------------------
# Lab 5, Exercise 2: Web browser simulator
# Purpose of program: To simulate the browsing history feature of internet explorers
#
# Author: Jayden Cho
# ----------------------------------------------------

from stack import Stack


def getAction():
	"""
	Get the entry from the user and return the entry if it is valid

	Returns: entry character (1st character of the input)
	"""
	
	valid_actions = ["=", "<", ">", "q"]
	
	user_input = input("Enter = to enter a URL, < to go back, > to go forward, q to quit: ")
	
	if user_input in valid_actions:
		return user_input
	else:
		raise Exception("Invalid entry.")


def goToNewSite(current, bck, fwd):
	'''
	Goes to a new site
	Inputs:
		current(str): current website
		bck(stack): stack that contains the list of websites before the current
		fwd(stack): stack that contains the list of websites after the current
	Returns: new current website
	'''
	
	bck.push(current)
	fwd.clear()
	
	return input("Enter the URL: ")


def goBack(current, bck, fwd):
	'''
	Goes to a previous site if exists
	Inputs:
		current(str): current website
		bck(stack): stack that contains the list of websites before the current
		fwd(stack): stack that contains the list of websites after the current
	Returns: new current website
	'''
	
	try:
		temp = bck.pop()
	except Exception:
		print("Cannot go back.")
		temp = current
	else:
		fwd.push(current)
	
	return temp


def goForward(current, bck, fwd):
	'''
	Goes to a next site if exists
	Inputs:
		current(str): current website
		bck(stack): stack that contains the list of websites before the current
		fwd(stack): stack that contains the list of websites after the current
	Returns: new current website
	'''
	
	try:
		temp = fwd.pop()
	except Exception:
		print("cannot go forward.")
		temp = current
	else:
		bck.push(current)
	
	return temp


def main():
	'''
	Controls main flow of web browser simulator
	Inputs: N/A
	Returns: None
	'''
	HOME = 'www.cs.ualberta.ca'
	back = Stack()
	forward = Stack()
	
	current = HOME
	quit = False
	
	while not quit:
		print('\nCurrently viewing', current)
		try:
			action = getAction()
		
		except Exception as actionException:
			print(actionException.args[0])
		
		else:
			if action == '=':
				current = goToNewSite(current, back, forward)
			elif action == '<':
				current = goBack(current, back, forward)
			elif action == '>':
				current = goForward(current, back, forward)
			elif action == 'q':
				quit = True
	
	print('Browser closing...goodbye.')


if __name__ == "__main__":
	main()
