import os.path
from collections import OrderedDict
import graphviz


def main():
	def extract_info():
		if not os.path.exists("data.txt"):
			rewrite_info([[[str(0)], [str(0)], [str(0)], [str(0)]], [[str(0), str(0)]]])
		data = [[each2.split("-") for each2 in each.rstrip().split(" ")] for each in open("data.txt", 'r').readlines()]
		return data
	
	def rewrite_info(data):
		file = open("data.txt", 'w+')
		file.write(" ".join(["-".join(each) for each in data[0]]) + "\r")
		file.write(" ".join(["-".join(each) for each in data[1]]))
	
	def need_consideration(target):
		for each_relation in data[1]:
			if target == each_relation[1] and each_relation[0][-3] == each_relation[1][-3]:
				return True
		
		return False
	
	def get_cost(temp, switch = True):
		b = 0
		if len(temp) == 2:
			temp, b = temp
			b = get_cost(b)
		temparray = [e[0] for e in data[1] if temp == e[1]]
		
		if switch:
			if len(temparray) == 0:
				return int(temp[-3:]) + b
			else:
				return int(temp[-3:]) + b + 1000 * (1 + max([get_cost(e, switch = False) for e in temparray]))
		else:
			if len(temparray) == 0:
				return 0
			else:
				return 1 + max([get_cost(e, switch = False) for e in temparray])
	
	def write_recommended(order, filename):
		ready = []
		current_v = 0
		current_k = []
		for k, v in order.items():
			if v == current_v:
				current_k.append(k)
			else:
				ready.append(current_k)
				current_k = [k]
				current_v = v
		ready.append(current_k)
		file = open(filename, "w+")
		[file.writelines(" ".join(eachline) + "\n") for eachline in ready]
	
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
					if uI[0] in data[0][fd - 1]:
						raise Exception("Course already exists. Input ignored.")
					data[0][fd - 1].append(uI[0])
					data[0][fd - 1].sort()
				elif len(uI) == 2:
					if [uI[0], uI[1]] in data[1]:
						raise Exception("Relation already exists. Input ignored.")
					data[1].append([uI[0], uI[1]])
					data[1].sort(key = get_cost)
				else:
					raise Exception("Wrong input.")
			except Exception as e:
				print(e)
			else:
				rewrite_info(data)
		
		if view:
			data = extract_info()
			
			diagram.attr(label = r'\n\nBachelor in Computing Science\n'
			                     r'Specialization in Software Practice\n'
			                     r'Course Roadmap\n'
			                     r'Total Credit: ' +
			                     str(3 * sum([sum([1 for each2 in each if each2 != "0"]) for each in data[0]])))
			diagram.attr(fontsize = '20')
			
			for each_level in data[0]:
				temp = []
				with diagram.subgraph() as s:
					s.attr(rank = 'same')
					for each in each_level:
						if need_consideration(each):
							temp.append(each)
							continue
						if each != "0": s.node(str(each))
				
				if len(temp) > 0:
					with diagram.subgraph() as s:
						s.attr(rank = 'same')
						for each in temp:
							s.node(each)
			
			temp1 = dict()
			temp2 = dict()
			i = 1
			for each in data[1]:
				if each != [0, 0]:
					diagram.edge(str(each[0]), str(each[1]), str(i))
					try:
						temp1[each[1]] += i
					except:
						temp1[each[1]] = 0
						temp1[each[1]] += i
					
					try:
						temp2[each[0]] += i
					except:
						temp2[each[0]] = 0
						temp2[each[0]] += i
					i += 1
			
			tempkeys = temp1.keys()
			for k in data[0]:
				for j in k:
					if j not in tempkeys and j != "0":
						temp1[j] = 0
			
			order1 = OrderedDict(sorted(temp1.items(), key = lambda kv: (kv[1], kv[0])))
			
			tempkeys = temp2.keys()
			for k in data[0]:
				for j in k:
					if j not in tempkeys and j != "0":
						temp2[j] = 0
			
			for k, v in temp1.items():
				temp2[k] += v
			
			order2 = OrderedDict(sorted(temp2.items(), key = lambda kv: (kv[1], kv[0]), reverse = True))
			
			write_recommended(order1, "recommended.txt")
			write_recommended(order2, "important.txt")
			diagram.view()


main()
# TODO: Distributing credits per category
#
