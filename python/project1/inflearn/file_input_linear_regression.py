import tensorflow as tf
import os
import numpy as np

# Turning off Tensorflow warning message in program output
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

xy = np.loadtxt('data_01.txt', delimiter = ',', dtype = np.float32)
xData = xy[:, 0:-1]
yData = xy[:, [-1]]
dataLength = 6

print(("Successfully loaded data.\nx: " + str(xData.shape) + " | y: " + str(yData.shape)) if (len(xData) == dataLength and len(yData) == dataLength) else "Error")

x = tf.placeholder(tf.float32, shape=[xData.shape[0], xData.shape[1]])
y = tf.placeholder(tf.float32, shape=[yData.shape[0], yData.shape[1]])
w = tf.Variable(tf.random_normal([xData.shape[1], yData.shape[1]]), name='weight')
b = tf.Variable(tf.random_normal([1]), name='bias')

hypothesis = tf.matmul(x, w) + b
cost = tf.reduce_mean(tf.square(hypothesis - y))

aOptimizer = tf.train.AdamOptimizer(learning_rate = .1, epsilon = 1e-12)
aTrain = aOptimizer.minimize(cost)

sess = tf.Session()

sess.run(tf.global_variables_initializer())

# CONTINUE FUNCTIONALIZE THE PROCESS

def printresult(cost_value, original_result, actual_result, session, test_value):

	x = tf.placeholder(tf.float32, shape = [len(test_value), len(test_value[0])])
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

	if len(test_value) > 0:
		print(session.run(hypothesis, feed_dict = {x: test_value}))
	return s


f = 0
c = 0
d = True
t = 0


def training(x_data, y_data):
	print("hi")


for step in range(30001):

	if step == 0:
		cost_val = 1

	if c == 1000:
		aOptimizer = tf.train.GradientDescentOptimizer(learning_rate = 2e-5)
		aTrain = aOptimizer.minimize(cost)
		print("hi |", c, "|", d, "|", f - cost_val, "|",)

	if t == 1000:
		printresult(cost_val, yData, hy_val, sess, [[50., 50., 50.], [60., 60., 60.], [40., 60., 80.]])
		break

	cost_val, hy_val, _ = sess.run(
		[cost, hypothesis, aTrain],
		feed_dict = {x: xData, y: yData}
	)

	if abs(f - cost_val) < cost_val / 1e-3 and d is True:
		d = False
		print("Hello", abs(f - cost_val))

	if abs(f - cost_val) < 1e-7 and abs(f - cost_val) != 0 and d is False:
		c += 1

	if abs(f - cost_val) == 0:
		t += 1

	f = cost_val

	if step % 1000 == 0:
		print(step, "Cost: ", cost_val, "\nPrediction:\n", hy_val)

else:
	printresult(cost_val, yData, hy_val, sess, [[50, 50, 50], [60, 60, 60], [40, 60, 80]])