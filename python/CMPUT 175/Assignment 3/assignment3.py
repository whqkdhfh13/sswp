# ----------------------------------------------------
# Assignment 3: Mini Spite and Malice game
#
# Author: Junhyeon Jayden Cho
# References: lab6 (self)
# ----------------------------------------------------
from SpiteAndMalice import *
from lectureStructures import CircularQueue


def main():
	# test()
	game = Game()
	game.play()


class Game:
	def __init__(self):
		self.__deck = CircularQueue(120)
		[self.__deck.enqueue(each) for each in shuffleCards([Card(i) for i in range(10)] * 10 + [Card(-1)] * 20)]
		self.__players = [Player("A"), Player("B")]
		self.__board = [PlayStack() for i in range(4)]
		self.__waitingList = []
		
		for each in self.__players:
			each.refillHand(self.__deck)
			each.fillGoal(self.__deck)
		
		if self.__players[0].highestCard() >= self.__players[1].highestCard():
			self.__currentPlayer = 0
		else:
			self.__currentPlayer = 1
	
	def __displayCurrentState(self):
		"""
		Displays the current state of the game, including playerA, playStack and playerB.
		:return: None
		:rtype: NoneType
		"""
		divider = "-" * 40
		print(divider)
		self.__players[0].printCurrentState()
		print()
		for i in range(4):
			print("Play Stack {0}: {1}".format(i, self.__board[i]))
		print()
		self.__players[1].printCurrentState()
		print(divider)
	
	def __enqueueDeck(self):
		"""
		Enqueue the list of cards from waitinglist to the cardshoe.
		:return: None
		:rtype: NoneType
		"""
		if len(self.__waitingList) == 50:
			temp = []
			for i in range(50):
				value = self.__waitingList.pop()
				if value == "*":
					value = -1
				temp.append(Card(int(value)))
			temp = shuffleCards(temp)
			for i in range(50):
				self.__deck.enqueue(temp.pop())
			print("Deck of cards added to the back")
	
	def play(self):
		"""
		Play the game until one player wins.
		:return: None
		:rtype: NoneType
		"""
		print("\nWelcome! Enjoy my game!")
		while True:
			self.__enqueueDeck()
			currentPlayer = self.__players[self.__currentPlayer]
			self.__displayCurrentState()
			win = currentPlayer.proceedTurn(self.__board, self.__waitingList)
			if win is True:
				print("Congratulations! " + currentPlayer.getPlayerName() + "wins!")
				return
			if win is False:
				currentPlayer.refillHand(self.__deck)
				self.__currentPlayer = (self.__currentPlayer + 1) % 2


def test():
	"""
	Test function
	:return: None
	:rtype: NoneType
	"""
	a = PlayStack()
	a.playCard(Card(0))
	for num in range(1, 7):
		print(a.playCard(Card(-1)))
		print(a)
	try:
		print(a.playCard(Card(6)))
	except:
		print("card rejected working")
	for num in range(7, 10):
		print(a.playCard(Card(num)))
		print(a)
	
	b = Hand()
	b.add([Card(2), Card(1), Card(1), Card(-1), Card(4)])
	print(b)
	print(b.pop(0))
	print(shuffleCards([Card(2), Card(3), Card(1), Card(-1), Card(4)]))
	
	deck = CircularQueue(120)
	[deck.enqueue(each) for each in shuffleCards([Card(i) for i in range(10)] * 10 + [Card(-1)] * 20)]
	pA = Player("A")
	pA.refillHand(deck)
	pA.fillGoal(deck)
	pA.printCurrentState()
	print(deck.size())
	board = [PlayStack() for i in range(4)]
	[print(each) for each in board]
	print(pA.proceedTurn(board, []))
	pA.printCurrentState()
	[print(each) for each in board]


main()
