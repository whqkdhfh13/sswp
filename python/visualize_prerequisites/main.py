import os.path

import graphviz


def extract_info():
	if not os.path.exists("data.txt"):
		rewrite_info([[[str(0)], [str(0)], [str(0)], [str(0)]], [[str(0), str(0)]]])
	data = [[each2.split("-") for each2 in each.rstrip().split(" ")] for each in open("data.txt", 'r').readlines()]
	return data


def rewrite_info(data):
	file = open("data.txt", 'w+')
	file.write(" ".join(["-".join(each) for each in data[0]]) + "\r")
	file.write(" ".join(["-".join(each) for each in data[1]]))


def main():
	course_upper_limit = 700
	
	data = extract_info()
	run = True
	while run:
		diagram = graphviz.Digraph(filename = 'prerequisites.gv')
		view = False
		
		uI = input("q = quit, v = view, num = course, num1 num2 = relation: ")
		
		if uI == "q":
			run = False
		elif uI == "v":
			view = True
		else:
			try:
				uI = uI.split(" ")
				if len(uI) == 1:
					fd = int(uI[0][-3])
					data[0][fd - 1].append(uI[0])
					data[0][fd - 1].sort()
				elif len(uI) == 2:
					data[1].append([uI[0], uI[1]])
					data[1].sort()
				else:
					raise Exception()
			except Exception as e:
				print(e)
			else:
				rewrite_info(data)
		
		if view:
			data = extract_info()
			
			i = 1
			for each_level in data[0]:
				with diagram.subgraph(name = 'cluster_%s' % i) as s:
					s.attr(rank = 'same')
					s.attr(label = '#%s00' % i)
					for each in each_level:
						if each != "0": s.node(str(each))
				i += 1
			
			i = 0
			for each in data[1]:
				if each != [0, 0]:
					diagram.edge(str(each[0]), str(each[1]), str(i))
					i += 1
			
			diagram.view()


main()
