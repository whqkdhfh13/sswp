data = open("earthquake.txt", "r").readlines()

for line in range(len(data)):
	data[line] = data[line].rstrip().split(" ")
	data[line].reverse()

names = []

for line in data:
	if line[0] not in names:
		names.append(line[0])

result = []

for name in names:
	temp = [name]
	for item in data:
		if item[0] == name:
			temp.append(item[-2:])
	result.append(temp)

stack = open("earthquakefmt.txt", "w+")

for item in result:
	stack.writelines(str(item) + "\n")

print(result)
