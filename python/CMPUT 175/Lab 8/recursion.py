def mylen(input):
	if not input:
		return 0
	else:
		return 1 + mylen(input[1:])


def intDivision(dividend, divisor):
	assert divisor != 0, "Invalid input"
	
	if divisor < 0:
		dividend *= -1
		divisor *= -1
	
	if dividend * divisor >= 0:
		if dividend < divisor:
			return 0
		else:
			return 1 + intDivision(dividend - divisor, divisor)
	else:
		if dividend > 0:
			return 0
		else:
			return -1 + intDivision(dividend + divisor, divisor)


def sumdigits(num):
	assert num >= 0, "Invalid input"
	num = str(num)
	
	if mylen(num) == 1:
		return int(num)
	else:
		return int(num[0]) + sumdigits(int(num[1:]))


def sumdigits2(num):
	assert num >= 0, "Invalid input"
	
	if num < 10:
		return num
	else:
		return (num % 10) + sumdigits2(num // 10)


def reverseDisplay(num):
	assert num >= 0, "Invalid input"
	num = str(num)
	
	if mylen(num) == 1:
		return int(num)
	else:
		return int(num[-1] + str(reverseDisplay(int(num[:-1]))))


def reverseDisplay2(num):
	assert num >= 0, "Invalid input"
	
	if num < 10:
		return num
	else:
		return (num % 10) * 10 ** (len(str(num)) - 1) + reverseDisplay2(num // 10)


def binary_search2(key, alist, low = None, high = None):
	if low is None:
		low = 0
	
	if high is None:
		high = len(alist) - 1
	
	guess = (high + low) // 2
	
	if key == alist[guess]:
		return guess
	
	if high == low:
		return "Item is not in the list"
	else:
		if key < alist[guess]:
			return binary_search2(key, alist, low = low, high = guess - 1)
		else:
			return binary_search2(key, alist, low = guess + 1, high = high)


def main():
	some_list = [-8, -2, 1, 3, 5, 7, 9]
	print(mylen(some_list))
	
	print("// int")
	print(intDivision(65, 12))
	print(intDivision(-36, 5))
	print(intDivision(36, -5))
	print(intDivision(-36, -5))
	
	print("// sum")
	print(sumdigits(78411))
	print(sumdigits2(78411))
	
	print("// rev")
	print(reverseDisplay(2964))
	print(reverseDisplay(10000))
	print(reverseDisplay2(2964))
	print(reverseDisplay2(10000))
	
	print("// bin")
	print(binary_search2(9, some_list))
	print(binary_search2(-8, some_list))
	print(binary_search2(4, some_list))


main()
