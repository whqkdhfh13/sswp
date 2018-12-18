import tensorflow as tf
import os
import numpy as np
import sys

# Turning off Tensorflow warning message in program output
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

xy = np.loadtxt('data_01.txt', delimiter = ',', dtype = np.float32)
xData = xy[:, 0:-1]
yData = xy[:, [-1]]

print(
	("Successfully loaded data.\nx: " + str(xData.shape) + " | y: " + str(yData.shape)) if xData.shape[0] == yData.shape[0] else "Error")

# CONTINUE FUNCTIONALIZE THE PROCESS


def training(x_data, y_data, temp_sess = None, degree = 1, run_count = 30000, cdv = 1e-3, test_value = [[]]):
	x_data = np.array(x_data)
	y_data = np.array(y_data)
	x_holder = tf.placeholder(tf.float32, shape = [None, x_data.shape[1]])
	y_holder = tf.placeholder(tf.float32, shape = [None, y_data.shape[1]])
	w_holder = tf.Variable(tf.random_normal([x_data.shape[1], y_data.shape[1]]), name = 'temp_weight')
	b_holder = tf.Variable(tf.random_normal([1]), name = 'temp_bias')

	hypothesis = tf.matmul(x_holder ** degree, w_holder) + b_holder
	temp_cost = tf.reduce_mean(tf.square(hypothesis - y_holder))

	temp_optimizer = tf.train.AdamOptimizer(learning_rate = .01, epsilon = 1e-12)
	temp_train = temp_optimizer.minimize(temp_cost)

	if temp_sess is None:
		temp_sess = tf.Session()
	temp_sess.run(tf.global_variables_initializer())

	temp_final = 0
	temp_count = 0
	temp_triggered = False
	temp_endCount = 0

	# Defining function to give clarity to the code
	def printresult(cost_value, original_result, actual_result):
		s = 0
		for i in range(len(original_result)):
			s += (original_result[i] - actual_result[i])
		print("/Most Approximate values/\n")
		for temp in actual_result:
			sh = temp - 2 * (s + np.sqrt(cost_value))
			sl = temp + 2 * (s + np.sqrt(cost_value))
			if sh > sl:
				print(temp, "|", sl, "-", sh)
			else:
				print(temp, "|", sh, "-", sl)
		print("\nCost =", cost_value, "=", np.sqrt(cost_value), "^ 2\ns =", s)

		feed_value = np.array(test_value)

		if feed_value.shape[1] != x_data.shape[1]:
			print("InvalidTestDataValue - Size of the test data does not match the trained data. Please check it again.")
			sys.exit()

		if feed_value.shape[0] > 0 and feed_value.shape[1] > 0:
			print(hypothesis.eval(session = temp_sess, feed_dict = {x_holder: feed_value}))

		temp_sess.close()

	# End of the defined function

	# Start the training phase
	for temp_step in range(run_count + 1):
		temp_cost_value, temp_hypothesis_value, _ = temp_sess.run([temp_cost, hypothesis, temp_train], feed_dict = {x_holder: x_data, y_holder: y_data})

		temp_difference = abs(temp_final - temp_cost_value)

		if temp_count == 1000 and temp_endCount == 0:
			temp_optimizer = tf.train.GradientDescentOptimizer(learning_rate = 2e-5)
			temp_train = temp_optimizer.minimize(temp_cost)
			temp_count += 1

		if temp_endCount == 1000 or temp_step == run_count:
			return printresult(temp_cost_value, y_data, temp_hypothesis_value)

		if temp_difference < temp_cost_value / cdv and temp_triggered is False:
			temp_triggered = True
			print("Hello", temp_difference)

		if temp_difference < 1e-7 and temp_difference != 0 and temp_triggered is True and temp_count < 1000:
			temp_count += 1

		if temp_difference == 0 and temp_count == 1001:
			temp_endCount += 1

		temp_final = temp_cost_value

		if temp_step % 1000 == 0:
			print(temp_step, "Cost: ", temp_cost_value, "\nPrediction:\n", temp_hypothesis_value)


training(xData, yData, test_value = [[40, 40, 40, 40], [60, 70, 80, 70]])
