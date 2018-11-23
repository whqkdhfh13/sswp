import tensorflow as tf
import os

# Turning off Tensorflow warning message in program output
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

X = tf.placeholder(tf.float32, name = "X")
Y = tf.placeholder(tf.float32, name = "Y")

addition = tf.add(X, Y, name = "addition")

# Create the session
with tf.Session() as main:

    result = main.run(addition, feed_dict= {X: [1, 2, 10], Y: [4, 3, 5]})
    print(result)