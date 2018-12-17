import tensorflow as tf
import os
import numpy as np

# SOLVE ERRORS BELOW AND RESEARCH HOW TO ADD GLOBAL LIBRARY

# Turning off Tensorflow warning message in program output
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'


def printresult(cost_value, original_result, actual_result, session, temp_hy, test_value = [[]]):
	feed_value = np.array(test_value)
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

	if len(test_value[0]) > 0:
		x = tf.placeholder(tf.float32, shape = [len(test_value), len(test_value[0])])
		print(session.run(temp_hy, feed_dict = {x: feed_value}))

	return s


def training(x_data, y_data, temp_sess = None, temp_hypothesis = None, run_count = 30001, cdv = 1e-3):
	x_holder = tf.placeholder(tf.float32, shape = [None, x_data.shape[1]])
	y_holder = tf.placeholder(tf.float32, shape = [None, y_data.shape[1]])
	w_holder = tf.Variable(tf.random_normal([x_data.shape[1], y_data.shape[1]]), name = 'temp_weight')
	b_holder = tf.Variable(tf.random_normal([1]), name = 'temp_bias')

	if temp_hypothesis is None:
		temp_hypothesis = tf.matmul(x_holder, w_holder) + b_holder
	temp_cost = tf.reduce_mean(tf.square(temp_hypothesis - y_holder))

	temp_optimizer = tf.train.AdamOptimizer(learning_rate = .01, epsilon = 1e-12)
	temp_train = temp_optimizer.minimize(temp_cost)

	if temp_sess is None:
		temp_sess = tf.Session()
	temp_sess.run(tf.global_variables_initializer())

	temp_final = 0
	temp_count = 0
	temp_triggered = False
	temp_endCount = 0

	for temp_step in range(run_count):
		temp_cost_value, temp_hypothesis_value, _ = temp_sess.run([temp_cost, temp_hypothesis, temp_train], feed_dict = {x_holder: x_data, y_holder: y_data})

		temp_difference = abs(temp_final - temp_cost_value)

		if temp_count == 1000:
			temp_optimizer = tf.train.GradientDescentOptimizer(learning_rate = 2e-5)
			temp_train = temp_optimizer.minimize(temp_cost)

		if temp_endCount == 1000:
			return printresult(temp_cost_value, y_data, temp_hypothesis_value, temp_sess)

		if temp_difference < temp_cost_value / cdv and temp_triggered is False:
			temp_triggered = True
			print("Hello", temp_difference)

		if temp_difference < 1e-7 and temp_difference != 0 and temp_triggered is True:
			temp_count += 1

		if temp_difference == 0:
			temp_endCount += 1

		temp_final = temp_cost_value

		if temp_step % 1000 == 0:
			print(temp_step, "Cost: ", temp_cost_value, "\nPrediction:\n", temp_hypothesis_value)

