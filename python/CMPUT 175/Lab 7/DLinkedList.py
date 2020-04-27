class DLinkedListNode:
	# An instance of this class represents a node in Doubly-Linked List
	def __init__(self, initData, initNext = None, initPrevious = None):
		self.data = initData
		self.next = initNext
		self.previous = initPrevious
		
		if initNext != None:
			self.next.previous = self
		if initPrevious != None:
			self.previous.next = self
	
	def getData(self):
		return self.data
	
	def setData(self, newData):
		self.data = newData
	
	def getNext(self):
		return self.next
	
	def getPrevious(self):
		return self.previous
	
	def setNext(self, newNext):
		self.next = newNext
	
	def setPrevious(self, newPrevious):
		self.previous = newPrevious


class DLinkedList:
	# An instance of this class represents the Doubly-Linked List
	def __init__(self):
		self.__head = None
		self.__tail = None
		self.__size = 0
	
	def search(self, item):
		current = self.__head
		found = False
		while current != None and not found:
			if current.getData() == item:
				found = True
			else:
				current = current.getNext()
		return found
	
	def index(self, item):
		current = self.__head
		found = False
		index = 0
		while current != None and not found:
			if current.getData() == item:
				found = True
			else:
				current = current.getNext()
				index = index + 1
		if not found:
			index = -1
		return index
	
	def add(self, item):
		new_item = DLinkedListNode(item, self.__head)
		if self.__size == 0:
			self.__tail = new_item
		self.__head = new_item
		self.__size += 1
		
	def append(self, item):
		new_item = DLinkedListNode(item, None, self.__tail)
		if self.__size == 0:
			self.__head = new_item
		self.__tail = new_item
		self.__size += 1
	
	def insert(self, pos, item):
		if pos == 0:
			self.add(item)
		elif pos == self.__size - 1:
			self.append(item)
		else:
			current = self.__head
			for i in range(pos):
				current = current.getNext()
				
			new_item = DLinkedListNode(item, current, current.getPrevious())
			
			if self.__size == 0:
				self.__head = new_item
				self.__tail = new_item
			
			self.__size += 1
	
	def remove(self, item):
		if self.search(item):
			current = self.__head
			index = self.index(item)
			
			for i in range(index):
				current = current.getNext()
			
			if index != 0:
				current.getPrevious().setNext(current.getNext())
			else:
				self.__head = current.getNext()
			if index != self.__size - 1:
				current.getNext().setPrevious(current.getPrevious())
			else:
				self.__tail = current.getPrevious()
			
			self.__size -= 1
	
	def pop(self, pos = None):
		if pos is None:
			pos = self.__size - 1
		
		current = self.__head
		
		for i in range(pos):
			current = current.getNext()
		
		if pos != 0:
			current.getPrevious().setNext(current.getNext())
		else:
			self.__head = current.getNext()
		if pos != self.__size - 1:
			current.getNext().setPrevious(current.getPrevious())
		else:
			self.__tail = current.getPrevious()
			
		self.__size -= 1
			
		return current.getData()
			
	def searchLarger(self, item):
		current = self.__head
		count = 0
		
		for i in range(self.__size):
			if current.getData() > item:
				return count
			count += 1
			current = current.getNext()
		
		return -1
	
	def getSize(self):
		# TODO:
		return self.__size
	
	def getItem(self, pos):
		# TODO:
		if pos >= 0:
			current = self.__head
			
			for i in range(pos):
				current = current.getNext()
		else:
			current = self.__tail
			
			for i in range(-pos - 1):
				current = current.getPrevious()
			
		return current.getData()
	
	def __str__(self):
		# TODO:
		current = self.__head
		result = ""
		
		for i in range(self.__size):
			result += str(current.getData()) + (" " if i != self.__size - 1 else "")
			current = current.getNext()
			
		return result


def test():
	linked_list = DLinkedList()
	
	is_pass = (linked_list.getSize() == 0)
	assert is_pass == True, "fail the test"
	
	linked_list.add("World")
	linked_list.add("Hello")
	
	is_pass = (str(linked_list) == "Hello World")
	assert is_pass == True, "fail the test"
	
	is_pass = (linked_list.getSize() == 2)
	assert is_pass == True, "fail the test"
	
	is_pass = (linked_list.getItem(0) == "Hello")
	assert is_pass == True, "fail the test"
	
	is_pass = (linked_list.getItem(1) == "World")
	assert is_pass == True, "fail the test"
	
	is_pass = (linked_list.getItem(0) == "Hello" and linked_list.getSize() == 2)
	assert is_pass == True, "fail the test"
	
	is_pass = (linked_list.pop(1) == "World")
	assert is_pass == True, "fail the test"
	
	is_pass = (linked_list.pop() == "Hello")
	assert is_pass == True, "fail the test"
	
	is_pass = (linked_list.getSize() == 0)
	assert is_pass == True, "fail the test"
	
	int_list2 = DLinkedList()
	
	for i in range(0, 10):
		int_list2.add(i)
	int_list2.remove(1)
	int_list2.remove(3)
	int_list2.remove(2)
	int_list2.remove(0)
	is_pass = (str(int_list2) == "9 8 7 6 5 4")
	assert is_pass == True, "fail the test"
	
	for i in range(11, 13):
		int_list2.append(i)
	is_pass = (str(int_list2) == "9 8 7 6 5 4 11 12")
	assert is_pass == True, "fail the test"
	
	for i in range(21, 23):
		int_list2.insert(0, i)
	is_pass = (str(int_list2) == "22 21 9 8 7 6 5 4 11 12")
	assert is_pass == True, "fail the test"
	
	is_pass = (int_list2.getSize() == 10)
	assert is_pass == True, "fail the test"
	
	int_list = DLinkedList()
	
	is_pass = (int_list.getSize() == 0)
	assert is_pass == True, "fail the test"
	
	for i in range(0, 1000):
		int_list.append(i)
	correctOrder = True
	
	is_pass = (int_list.getSize() == 1000)
	assert is_pass == True, "fail the test"
	
	for i in range(0, 200):
		if int_list.pop() != 999 - i:
			correctOrder = False
	
	is_pass = correctOrder
	assert is_pass == True, "fail the test"
	
	is_pass = (int_list.searchLarger(200) == 201)
	assert is_pass == True, "fail the test"
	
	int_list.insert(7, 801)
	
	is_pass = (int_list.searchLarger(800) == 7)
	assert is_pass == True, "fail the test"
	
	is_pass = (int_list.getItem(-1) == 799)
	assert is_pass == True, "fail the test"
	
	is_pass = (int_list.getItem(-4) == 796)
	assert is_pass == True, "fail the test"
	
	if is_pass == True:
		print("=========== Congratulations! Your have finished exercise 2! ============")


if __name__ == '__main__':
	test()

