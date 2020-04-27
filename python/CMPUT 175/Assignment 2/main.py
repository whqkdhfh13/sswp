from UltimateMetaTTT import MetaTicTacToe


def main():
	play_again = True
	while play_again:
		mt = MetaTicTacToe("MetaTTTconfig.txt")
		play_again = mt.play()
	print("Thanks for playing! Goodbye.")


main()
