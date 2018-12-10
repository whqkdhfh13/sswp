import tensorflow as tf
import os

# Turning off Tensorflow warning message in program output
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

filename_queue = tf.train.string_input_producer(
	['data_01.txt'], shuffle = False, name = 'filename_queue'
)

reader = tf.TextLineReader()
key, value = reader.read(filename_queue)

record_defaults = [[0.], [0.], [0.], [0.]]

xy = tf.decode_csv(value, record_defaults = record_defaults)

train_x_batch, train_y_batch = tf.train.batch([xy[0:-1], xy[-1:]], batch_size = 10)

x = tf.placeholder(tf.float32, shape=[None, 3])
y = tf.placeholder(tf.float32, shape=[None, 1])
w = tf.Variable(tf.random_normal([3, 1]), name='weight')
b = tf.Variable(tf.random_normal([1]), name='bias')

hypothesis = tf.matmul(x, w) + b

cost = tf.reduce_mean(tf.square(hypothesis - y))

lRate = 2e-5

aOptimizer = tf.train.AdagradDAOptimizerOptimizer()
aTrain = aOptimizer.minimize(cost)

gOptimizer = tf.train.GradientDescentOptimizer(learning_rate = lRate)
gTrain = gOptimizer.minimize(cost)

sess = tf.Session()
sess.run(tf.global_variables_initializer())

coord = tf.train.Coordinator()
threads = tf.train.start_queue_runners(sess = sess, coord = coord)

for step in range(20001):
	if step == 0:
		costVal = 1

	if costVal < 0.1:
		lRate /= 10
		gOptimizer = tf.train.GradientDescentOptimizer(learning_rate = lRate)
	x_batch, y_batch = sess.run([train_x_batch, train_y_batch])
	costVal, hyVal, _ = sess.run(
		[cost, hypothesis, aTrain],
		feed_dict = {x : x_batch, y : y_batch}
	)

	if step % 200 == 0:
		print(step, "Cost: ", costVal, "\nPrediction:\n", hyVal)

coord.request_stop()
coord.join(threads)
