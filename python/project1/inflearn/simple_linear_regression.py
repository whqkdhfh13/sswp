import tensorflow as tf
import os

# Turning off Tensorflow warning message in program output
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

# Over-writen variables
# xTrain = [1, 2, 3]
# yTrain = [1, 2, 3]

x = tf.placeholder(tf.float32, shape = [None])
y = tf.placeholder(tf.float32, shape = [None])


w = tf.Variable(tf.random_normal([1]), name = 'weight')
b = tf.Variable(tf.random_normal([1]), name = 'bias')

# Our hypothesis wx + b
hypothesis = w * x**2 + b

# cost/loss function
cost = tf.reduce_mean(tf.square(hypothesis - y))

# Minimize
optimizer = tf.train.AdamOptimizer(learning_rate = 1)
train = optimizer.minimize(cost)

print(hypothesis)
print(cost)
print(optimizer)
print(train)

# Launch the graph in a session
sess = tf.Session()

# Initialize global variables in the graph
sess.run(tf.global_variables_initializer())

# Fit the line
for step in range(2001):
	costVal, wVal, bVal, _ = sess.run([cost, w, b, train], feed_dict = {x: [1, 2, 3, 4, 5], y: [2, 5, 10, 17, 26]})
	if step % 20 == 0:
		print(step, "|", costVal, "|", wVal, "|", bVal)

# Testing our model
print(sess.run(hypothesis, feed_dict = {x: [6, -3]}))