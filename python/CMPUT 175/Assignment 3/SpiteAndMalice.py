# ----------------------------------------------------
# Assignment 3: Mini Spite and Malice classes
#
# Author: Junhyeon Jayden Cho
# References: lab5 (self)
# ----------------------------------------------------
import random

from lectureStructures import Stack


class Card:
	def __init__(self, value):
		assert -1 <= value <= 9, "Error: Value in wrong range"
		self.__value = value
		self.__face = "*" if value == -1 else str(value)
	
	def assign(self, value):
		"""
		Assigns a new value to the card.
		:param value: a value to be assigned
		:type value: int
		"""
		assert self.__value == -1, "Error: The card is not a wild card"
		assert -1 <= value <= 9, "Error: Value in wrong range"
		
		self.__value = value
	
	def getValue(self):
		"""
		Returns the value of the card
		:return: the value of the card
		:rtype: int
		"""
		return self.__value
	
	def getFace(self):
		"""
		Returns the face of the card
		:return: the face of the card
		:rtype: str
		"""
		return self.__face
	
	def __str__(self):
		return "[%s]" % self.__face
	
	def __repr__(self):
		return self.__str__() + "." + str(self.__value)


class PlayStack:
	def __init__(self):
		self.__cards = Stack()
		self.__currentValue = 0
	
	def peekValue(self):
		"""
		Peeks the value at the top of the stack
		:return: the value at the top of the stack
		:rtype: int
		"""
		assert self.__cards.size() > 0, "Error: No cards in the playing stack"
		return self.__cards.peek().getValue()
	
	def peekFace(self):
		"""
		Peeks the face at the top of the stack
		:return: the face at the top of the stack
		:rtype: str
		"""
		assert self.__cards.size() > 0, "Error: No cards in the playing stack"
		return self.__cards.peek().getFace()
	
	def playCard(self, card):
		"""
		Push the card to the top of the stack, if valid.
		:param card: the card to be added
		:type card: Card
		:return: list of faces if filled all the way; else empty list
		:rtype: List
		"""
		# if card is valid or joker card
		if self.__currentValue == card.getValue() or card.getValue() == -1:
			self.__cards.push(card)
			self.__currentValue += 1
		else:
			raise Exception("Error: Card rejected")
		
		# if play stack full
		if self.__cards.size() == 10:
			temp = []
			for each in str(self):
				if each not in ["|", "[", "]"]:
					temp.append(each)  # extract only the faces
			self.__init__()
			return temp
		
		return []
	
	def __str__(self):
		return "|{0}|".format("".join([str(each) for each in str(self.__cards).split(" ")]))


class Hand:
	def __init__(self):
		self.__hand = []
	
	def sort(self):
		"""
		Sorts the hand.
		:return: None
		:rtype: NoneType
		"""
		
		def getValue(card):
			"""
			Return the value of the card.
			:param card: the card
			:type card: Card
			:return: the value of the card
			:rtype: int
			"""
			return card.getValue()
		
		self.__hand.sort(key = getValue)
	
	def pop(self, i = None):
		"""
		Removes the card at index i.
		If i is None, the function removes the last element.
		:param i: index of the card to be removed
		:type i: int
		:return: the removed card
		:rtype: Card
		"""
		if i is None: i = len(self.__hand) - 1
		assert 0 <= i <= len(self.__hand) - 1, "Error: index invalid"
		temp = self.__hand.pop(i)
		self.sort()
		
		return temp
	
	def index(self, v):
		"""
		Find the index of the first card with value v.
		:param v: the value to be found
		:type v: int
		:return: the index of the card; -1 if not found
		:rtype: int
		"""
		assert -1 <= v <= 9, "Error: value invalid"
		
		for i in range(self.size()):
			if v == self.__hand[i].getValue():
				return i
		
		return -1
	
	def check0(self):
		"""
		Returns the index of the first card [0]
		:return: the index of the [0] card; -1 if not found
		:rtype: int
		"""
		return self.index(0)
	
	def size(self):
		"""
		Returns the number of cards in the hand.
		:return: the number of cards in the hand
		:rtype: int
		"""
		return len(self.__hand)
	
	def add(self, cardList):
		"""
		Adds cards in the cardList to the hand
		:param cardList: list of cards
		:type cardList: List[Card]
		:return: None
		:rtype: NoneType
		"""
		assert self.size() + len(cardList) <= 5, "Error: Too many cards to be added"
		
		for each in cardList:
			self.__hand.append(each)
		
		self.sort()
	
	def __str__(self):
		return "[%s]" % "".join([str(each) for each in self.__hand])


def shuffleCards(cardList):
	"""
	Shuffles the list of cards.
	:param cardList: the list to be shuffled
	:type cardList: List[Card]
	:return: shuffled list of cards
	:rtype: List[Card]
	"""
	return [cardList.pop(random.randint(0, len(cardList) - 1)) for i in range(len(cardList))]


class Player:
	def __init__(self, identity):
		self.__identity = "Player" + identity
		self.__hand = Hand()
		self.__discard = [Stack() for i in range(4)]
		self.__goal = Stack()
	
	def getPlayerName(self):
		"""
		Returns the name of the player
		:return: player name
		:rtype: str
		"""
		return self.__identity
	
	def highestCard(self):
		"""
		Returns the highest card that the player has in the hand.
		A joker card will have a value of 10 for the purpose of comparison.
		:return: value of the highest card in the hand
		:rtype: int
		"""
		if self.__hand.size() == 0:
			return -1
		if self.__hand.index(-1) != -1:
			return 10
		else:
			for i in range(9, -1, -1):
				if self.__hand.index(i) != -1:
					return i
	
	def printCurrentState(self):
		"""
		Print the hand, discards, and goal pile of the player.
		:return: None
		:rtype: NoneType
		"""
		self.__hand.sort()
		print("{0} Hand {1}".format(self.__identity, str(self.__hand)))
		for i in range(4):
			print("{0} Discard {1}: {2}".format(
				self.__identity,  # player name
				i + 1,
				"[]" if self.__discard[i].size() == 0 else str(self.__discard[i].peek()))
			)
		print("{0} Goal {1} {2} cards left".format(self.__identity, str(self.__goal.peek()), self.__goal.size()))
	
	def refillHand(self, cardshoe):
		"""
		Refills the hand with cards so that the hand holds 5 cards.
		:param cardshoe: deck of cards for cards to be taken
		:type cardshoe: CircularQueue
		:return: None
		:rtype: NoneType
		"""
		self.__hand.add([cardshoe.dequeue() for i in range(5 - self.__hand.size())])
		self.__hand.sort()
	
	def fillGoal(self, cardshoe):
		"""
		Fills the goal pile when the game starts.
		:param cardshoe: deck of cards for cards to be taken
		:type cardshoe: CircularQueue
		:return: None
		:rtype: NoneType
		"""
		for i in range(15):
			self.__goal.push(cardshoe.dequeue())
	
	def __getInput(self, message, validInput):
		"""
		Take and validate the input.
		:param message: message to be displayed
		:type message: str
		:param validInput: list of valid inputs
		:type validInput: List[str]
		:return: the valid input
		:rtype: str
		"""
		while True:
			temp = input(message + "\n")
			if temp in validInput:
				# check if target discard pile is empty
				if "d" in temp and self.__discard[int(temp[-1]) - 1].size() == 0:
					print("Error: Targeted discard pile empty")
				else:
					return temp
			else:
				print("Error: Wrong input")
	
	def proceedTurn(self, pile, waitingList):
		"""
		Process the one turn of the player.
		:param pile: play Stack
		:type pile: PlayStack
		:param waitingList: list of played cards
		:type waitingList: List
		:return: True if won, False if turn ended, None if continue in the turn
		:rtype: bool, Nonetype
		"""
		try:
			if self.__goal.size() == 0:  # win if goal stack is empty
				return True
			
			if self.__hand.check0() > -1:  # if there is 0 card in the hand
				for i in range(4):
					try:
						pile[i].peekValue()  # see if any play stack is empty
					except:
						try:
							print("%s, You have to play 0 card. The program will automatically play 0."
							      % self.__identity)
							p = self.__getInput("Which Play Stack are you targeting (1..4)?",
							                    [str(i + 1) for i in range(4)])
							
							# put the card on the play stack and add return value to waitingList
							waitingList += pile[int(p) - 1].playCard(self.__hand.pop(self.__hand.check0()))
						except:
							self.__hand.add([Card(0)])
							print("Error: Card rejected")
						
						return
			
			p = self.__getInput("%s, choose action: p (play) or x (discard/end turn)" % self.__identity,
			                    ["x", "p"]) == "p"
			temp = [
				["{0} from where: hi = hand at position i ({1}){2}?".format(
					"Play" if p else "Discard",
					str(self.__hand.size()) if self.__hand.size() < 2 else "1..%s" % self.__hand.size(),
					"; g = goal; dj = discard pile j (1..4)" if p else ""),  # temp[0][0]
					["h" + str(i + 1) for i in range(self.__hand.size())] +
					["g"] + ["d" + str(i + 1) for i in range(4)]],  # temp [0][1]
				["Which %s are you targeting (1..4)?" % ("Play Stack" if p else "Discard Pile"),  # temp [1][0]
				 [str(i + 1) for i in range(4)]]  # temp [1][1]
			]
			if not p and self.__hand.size() == 0:
				return False
			
			q1 = self.__getInput(temp[0][0], temp[0][1])
			q2 = self.__getInput(temp[1][0], temp[1][1])
			
			if p:  # if play entered
				try:  # pop the card from appropriate place
					if q1 == "g":
						card = self.__goal.pop()
					elif "h" in q1:
						card = self.__hand.pop(int(q1[-1]) - 1)
					elif "d" in q1:
						card = self.__discard[int(q1[-1]) - 1].pop()
					
					# put the card on the play stack and add return value to waitingList
					waitingList += pile[int(q2) - 1].playCard(card)
					
					return
				except:  # if anything goes wrong, put the card back into hand
					if q1 == "g":
						self.__goal.push(card)
					elif "h" in q1:
						self.__hand.add([card])
					elif "d" in q1:
						self.__discard[int(q1[-1]) - 1].push(card)
					raise Exception("Error: Card rejected")
			else:  # if discard or endturn typed
				card = self.__hand.pop(int(q1[-1]) - 1)
				if card.getValue() == 0:
					self.__hand.add([card])
					raise Exception("Error: You cannot add 0 into your discard pile")
				self.__discard[int(q2) - 1].push(card)
				
				return False
		except Exception as e:  # if something goes wrong
			print(e)
			return
