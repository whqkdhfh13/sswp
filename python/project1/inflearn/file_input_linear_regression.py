import tensorflow as tf
import os
import numpy as np

# Turning off Tensorflow warning message in program output
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

xy = np.loadtxt('data_01.txt', delimiter = ',', dtype = np.float32)
xData = xy[:, 0:-1]
yData = xy[:, [-1]]
dataLength = 6

print("Successfully loaded data.\nx: " + str(xData.shape) + " | y: " + str(yData.shape) if (len(xData) == dataLength and len(yData) == dataLength) else "Error")

x = tf.placeholder(tf.float32, shape=[None, 3])
y = tf.placeholder(tf.float32, shape=[None, 1])
w = tf.Variable(tf.random_normal([3, 1]), name='weight')
b = tf.Variable(tf.random_normal([1]), name='bias')

hypothesis = tf.matmul(x, w) + b

cost = tf.reduce_mean(tf.square(hypothesis - y))

aOptimizer = tf.train.AdamOptimizer(learning_rate = 1)
aTrain = aOptimizer.minimize(cost)

gOptimizer = tf.train.GradientDescentOptimizer(learning_rate = 2e-5)
gTrain = gOptimizer.minimize(cost)

sess = tf.Session()

sess.run(tf.global_variables_initializer())


def printresult(cost_value, original_result, actual_result, session, test_value):
	s = 0
	for i in range(len(original_result)):
		s += (original_result[i] - actual_result[i])
	print("/Most Approximate values/\n")
	for temp in actual_result:
		sh = temp - 2 * s
		sl = temp + 2 * s
		if sh > sl:
			print(temp, "|", sl, "-", sh)
		else:
			print(temp, "|", sh, "-", sl)
	print("\nCost =", cost_value, "=", np.sqrt(cost_value), "^ 2")

	if len(test_value) > 0:
		print(session.run(hypothesis, feed_dict = {x: test_value}))


for step in range(20001):
	if step == 0:
		cost_val = 1

	cost_val, hy_val, _ = sess.run(
		[cost, hypothesis, aTrain if cost_val > 6 else gTrain],
		feed_dict = {x: xData, y: yData}
	)

	# if step % 100 == 0:
	# 	print(step, "Cost: ", cost_val, "\nPrediction:\n", hy_val)

	if step == 20000:
		printresult(cost_val, yData, hy_val, sess, [[50, 50, 50], [60, 60, 60]])
		# for temp in hy_val:
		# 	print(temp, "±", 2 * np.sqrt(cost_val))
		# s = 0
		# for i in range(len(yData)):
		# 	s += (yData[i] - hy_val[i]) / len(hy_val)
		# print(s * len(hy_val), " | ", s)
		#
		# print("\nYour score will be ", sess.run(hypothesis, feed_dict = {x: [[90, 93, 96]]}))
