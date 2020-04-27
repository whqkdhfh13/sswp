class Stack:
	def __init__(self):
		self.items = []
	
	def push(self, item):
		self.items.append(item)
	
	# MODIFY: RAISE AN EXCEPTION IF THIS METHOD IS INVOKED ON AN EMPTY STACK
	def pop(self):
		if len(self.items) == 0:
			raise Exception()
		return self.items.pop()
	
	# MODIFY: RAISE AN EXCEPTION IF THIS METHOD IS INVOKED ON AN EMPTY STACK
	def peek(self):
		assert len(self.items) > 0, "yo whats up"
		return self.items[len(self.items) - 1]
	
	def isEmpty(self):
		return self.items == []
	
	def size(self):
		return len(self.items)
	
	def show(self):
		print(self.items)
	
	def __str__(self):
		stackAsString = ''
		for item in self.items:
			stackAsString += str(item) + ' '
		return stackAsString
	
	def clear(self):
		for i in range(len(self.items)):
			self.pop()


class BoundedQueue:
	# Creates a new empty queue:
	def __init__(self, capacity):
		assert isinstance(capacity, int), (
				'Error: Type error: %s' % (type(capacity)))  # throws an assertion error on not true
		assert capacity >= 0, ('Error: Illegal capacity: %d' % (capacity))
		self.__items = []  # init the  list / queue as empty
		self.__capacity = capacity
	
	# Adds a new item to the back of the queue, and returns nothing:
	def enqueue(self, item):
		"""
		Enqueue the element to the back of the queue
		:param item: the element to be enqueued
		:return: No returns
		"""
		assert len(self.__items) < self.__capacity, "Error: Queue is full"
		self.__items.append(item)
	
	# Removes and returns the front-most item in the queue.
	# Returns nothing if the queue is empty.
	def dequeue(self):
		"""
		Dequeue the element from the front of the queue and return it
		:return: The object that was dequeued
		"""
		assert len(self.__items) != 0, "Error: Queue is empty"
		return self.__items.pop(0)
	
	# Returns the front-most item in the queue, and DOES NOT change the queue.
	def peek(self):
		if len(self.__items) <= 0:
			raise Exception('Error: Queue is empty')
		return self.__items[0]
	
	# Returns True if the queue is empty, and False otherwise:
	def is_empty(self):
		return len(self.__items) == 0
	
	# Returns True if the queue is full, and False otherwise:
	
	def is_full(self):
		return len(self.__items) == self.__capacity
	
	# Returns the number of items in the queue:
	def size(self):
		return len(self.__items)
	
	# Returns the capacity of the queue:
	
	def capacity(self):
		return self.__capacity
	
	# Removes all items from the queue, and sets the size to 0
	# clear() should not change the capacity
	def clear(self):
		self.__items = []
	
	# Returns a string representation of the queue:
	def __str__(self):
		str_exp = ""
		for item in self.__items:
			str_exp += (str(item) + " ")
		return str_exp
	
	# Returns a string representation of the object bounded queue:
	def __repr__(self):
		return str(self) + " Max=" + str(self.__capacity)


class CircularQueue:
	# Creates a new empty queue:
	def __init__(self, capacity):
		# Check validity of capacity type and value
		assert isinstance(capacity, int), ('Error: Type error: %s' % (type(capacity)))
		assert capacity >= 0, ('Error: Illegal capacity: %d' % (capacity))
		
		# Initialize private attributes
		self.__items = []
		self.__capacity = capacity
		self.__count = 0
		self.__head = 0
		self.__tail = 0
		
		# Allocate space for the circular queue
		for i in range(self.__capacity):
			self.__items.append(None)
	
	# Adds a new item to the back of the queue, and returns nothing:
	def enqueue(self, item):
		"""
		This function enqueues the item into the back of the queue
		:param item: The  item to  be queued
		:return: No returns
		"""
		
		assert self.__count != self.__capacity, 'Error: Queue is full'
		if len(self.__items) < self.__capacity:
			self.__items.append(item)
		else:
			self.__items[self.__tail] = item
		self.__count += 1
		self.__tail = (self.__tail + 1) % self.__capacity
	
	# Removes and returns the front-most item in the queue.
	# Returns nothing if the queue is empty.
	def dequeue(self):
		"""
		Dequeue the the element from the front of the queue and return the value
		:return: Returns the object that is dequeued
		"""
		assert self.__count != 0, 'Error: Queue is empty'
		item = self.__items[self.__head]
		self.__items[self.__head] = None
		self.__count -= 1
		self.__head = (self.__head + 1) % self.__capacity
		return item
	
	# Returns the front-most item in the queue, and DOES NOT change the queue.
	def peek(self):
		if self.__count == 0:
			raise Exception('Error: Queue is empty')
		
		return self.__items[self.__head]
	
	# Returns True if the queue is empty, and False otherwise:
	def is_empty(self):
		return self.__count == 0
	
	# Returns True if the queue is full, and False otherwise:
	
	def is_full(self):
		return self.__count == self.__capacity
	
	# Returns the number of items in the queue:
	def size(self):
		return self.__count
	
	# Returns the capacity of the queue:
	
	def capacity(self):
		return self.__capacity
	
	# Removes all items from the queue, and sets the size to 0
	# clear() should not change the capacity
	def clear(self):
		self.__items = []
		self.__count = 0
		self.__head = 0
		self.__tail = 0
	
	# Returns a string representation of the queue:
	def __str__(self):
		str_exp = "["
		i = self.__head
		for j in range(self.__count):
			str_exp += str(self.__items[i]) + " "
			i = (i + 1) % self.__capacity
		return str_exp + "]"
	
	# Returns a string representation of the object CircularQueue
	def __repr__(self):
		return str(self.__items) + " H= " + str(self.__head) + " T=" + str(self.__tail) + " (" + str(
			self.__count) + "/" + str(self.__capacity) + ")"
