def main():
	debug = False
 
	# Step 1
	bulbs = {
		"daffodil": 0.35,
		"tulip"   : 0.33,
		"crocus"  : 0.25,
		"hyacinth": 0.75,
		"bluebell": 0.50
	}
	
	# Step 2
	maryOrder = {
		"daffodil": 50,
		"tulip"   : 100
	}
	
	# Step 3
	bulbs["tulip"] = round(bulbs["tulip"] * 1.25, 2)
	print(bulbs if debug else "")
	
	# Step 4
	maryOrder["hyacinth"] = 30
	print(maryOrder if debug else "")
	
	# Step 5, 6
	nsum = 0
	print("\nYou have purchased the following bulbs: ")
	for k, v in sorted(maryOrder.items()):
		temp = v * bulbs[k]
		nsum += temp
		print("{0}   *{1:4d} = ${2:6.2f}".format(k[:3].upper(), v, temp))
	print("\nThank you for purchasing {0} bulbs from Bluebell Greenhouses."
	      "\nYour total comes to ${1:6.2f}".format(sum(maryOrder.values()), nsum))


main()
