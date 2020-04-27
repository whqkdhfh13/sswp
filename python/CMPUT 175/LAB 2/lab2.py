def getInputFile():
	"""
	:description: Loop until the valid extention, and returns the filename
	:return filename (str): The string of the file name
	"""
	while True:
		filename = input("Enter the input filename: ")
		if filename[filename.index("."):] == ".txt":
			return filename
		print(
			"Invalid filename extension: \"" +
			filename[filename.index("."):] +
			"\". Please re-enter the input filename.")


def decrypt(filename):
	"""
	:description: Decrypt the message with the given cipher key
	:param filename (str): The file that includes both the key and encrypted message
	:return: None
	"""
	file = open(filename, "r").readlines()
	message = str("".join(file[1:]))
	try:
		key = int(file[0].rstrip()) % 26
	except:
		key = 0  # for key phrase cipher, use key = file[0]
	
	temp = []
	
	for i in range(len(message)):
		if 65 <= ord(message[i]) <= 90:
			temp.append(chr((ord(message[i]) - int(key) - 65) % 26 + 65))
		elif 97 <= ord(message[i]) <= 122:
			temp.append(chr((ord(message[i]) - int(key) - 97) % 26 + 97))
		else:
			temp.append(message[i])
	
	# KEY PHRASE CIPHER
	# k = 0
	# for i in range(len(message)):
	# 	if 65 <= ord(message[i]) <= 90:
	# 		temp.append(chr((ord(message[i]) - ord(key[k % 8]) + 97 - 65) % 26 + 65))
	# 	elif 97 <= ord(message[i]) <= 122:
	# 		temp.append(chr((ord(message[i]) - ord(key[k % 8]) + 97 - 97) % 26 + 97))
	# 	else:
	# 		temp.append(message[i])
	# 		k -= 1
	# 	k += 1
	
	print("Decrypting(Encrypting) table:")
	
	for j in range(26):
		temp2 = []
		for i in range(len(message)):
			if 65 <= ord(message[i]) <= 90:
				temp2.append(chr((ord(message[i]) - j - 65) % 26 + 65))
			elif 97 <= ord(message[i]) <= 122:
				temp2.append(chr((ord(message[i]) - j - 97) % 26 + 97))
			else:
				temp2.append(message[i])
		
		print("|| key: {0} ({1}) || {2}".format(j, 26 - j, "".join(temp2)))
	
	print("The decrypted message is:\n", "".join(temp))


decrypt(getInputFile())
