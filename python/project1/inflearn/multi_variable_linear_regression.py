import tensorflow as tf
import os

# Turning off Tensorflow warning message in program output
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

x1data = [73, 93, 89, 96, 73]
x2data = [80, 88, 91, 98, 66]
x3data = [75, 93 ,90, 100, 70]
ydata = [152, 185, 180, 196, 142]

# placeholders for a tensor that will be always fed
x1 = tf.placeholder(tf.float32)
x2 = tf.placeholder(tf.float32)
x3 = tf.placeholder(tf.float32)

y = tf.placeholder(tf.float32)

w1 = tf.Variable(tf.random_normal([1]), name='weight1')
w2 = tf.Variable(tf.random_normal([1]), name='weight2')
w3 = tf.Variable(tf.random_normal([1]), name='weight3')
b = tf.Variable(tf.random_normal([1]), name='bias')
hypothesis = x1 * w1 + x2 * w2 + x3 * w3 + b

cost = tf.reduce_mean(tf.square(hypothesis - y), name = 'cost')

gOptimizer = tf.train.GradientDescentOptimizer(learning_rate = 2e-5)
gTrain = gOptimizer.minimize(cost)

aOptimizer = tf.train.AdamOptimizer()
aTrain = aOptimizer.minimize(cost)

sess = tf.Session()

sess.run(tf.global_variables_initializer())

for step in range(10001):
	costVal, hyVal, _ = sess.run([cost, hypothesis, aTrain], feed_dict = {x1: x1data, x2: x2data, x3: x3data, y: ydata})

	if step%200 == 0:
		print(step, "\nCost: ", costVal, "\nPrediction:", hyVal)


for step in range(10001):
	costVal, hyVal, _ = sess.run([cost, hypothesis, gTrain], feed_dict = {x1: x1data, x2: x2data, x3: x3data, y: ydata})

	if step%200 == 0:
		print(step, "\nCost: ", costVal, "\nPrediction:", hyVal)
