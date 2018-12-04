import tensorflow as tf
import os
import numpy as np

# Turning off Tensorflow warning message in program output
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

# x1data = [73, 93, 89, 96, 73]
# x2data = [80, 88, 91, 98, 66]
# x3data = [75, 93, 90, 100, 70]
xdata = [[73, 80, 75], [93, 88, 93], [89, 91, 90], [96, 98, 100], [73, 66, 70]]
ydata = [[76], [91], [90], [98], [70]]

# placeholders for a tensor that will be always fed
# x1 = tf.placeholder(tf.float32)
# x2 = tf.placeholder(tf.float32)
# x3 = tf.placeholder(tf.float32)
q = np.int64(0)

x = tf.placeholder(tf.float32, shape = [None, 3])
y = tf.placeholder(tf.float32, shape = [None, 1])

w = tf.Variable(tf.random_normal([3, 1]), name = 'weight')
# w2 = tf.Variable(tf.random_normal([1]), name='weight2')
# w3 = tf.Variable(tf.random_normal([1]), name='weight3')
b = tf.Variable(tf.random_normal([1]), name = 'bias')
hypothesis = tf.matmul(x, w) + b

cost = tf.reduce_mean(tf.square(hypothesis - y), name = 'cost')

gOptimizer = tf.train.AdagradOptimizer(learning_rate = 1)
gTrain = gOptimizer.minimize(cost)

lRate = 1

aOptimizer = tf.train.AdamOptimizer()
aTrain = aOptimizer.minimize(cost)

sess = tf.Session()

sess.run(tf.global_variables_initializer())

for step in range(50001):
	if step == 0:
		costVal = 1

	costVal, hyVal, _ = sess.run([cost, hypothesis, gTrain], feed_dict = {x: xdata, y: ydata})

	if step % 1000 == 0:
		print(step, "- ", lRate, "\nCost: ", costVal, "\nPrediction:", hyVal)

# Matrix multiplication
#     [x, y] * [y, z] = [x, z]
# ex) [5, 3] * [3, 2] = [5, 2]

print(sess.run(hypothesis, feed_dict = {x: [[90, 90, 90]]}))
# Catch little spikes from aTrain