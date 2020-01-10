#1.
# To test that your code works, create a new instance of the Stack class, and play around with adding and removing elements. Remember, a stack follows the principle of LIFO!




class Stack

    attr_reader :array

    def initialize
      # create ivar to store stack here!
      @array = []
    end

    def push(el)
      # adds an element to the stack
      array.push(el)
    end

    def pop
      # removes one element from the stack
      array.pop
    end

    def peek
      # returns, but doesn't remove, the top element in the stack
      array.last
    end

    
end

#test = Stack.new

# p test.push(2)
# p test.push("Hello")
# p test.push(true)
# p test.pop
# p test.peek



#2
#Now let's write a Queue class. We will need the following instance methods: enqueue(el), dequeue, and peek. Test your code to ensure it follows the principle of FIFO.

class MyQueue

    attr_reader :array
    def initialize 
        @array = []
    end

    def enqueue(el)
        array.push(el)
    end

    def dequeue
        array.shift
    end

    def peek
        array.first
    end

end

q = MyQueue.new
p q.enqueue(2)
p q.enqueue("Hello")
p q.enqueue(true)
p q.dequeue
p q.peek


#3
#As you saw in the videos for tonight, a map can be implemented using a 2D array. Let's write a Map class (following a similar pattern to Stack and Queue) that implements a map using only arrays.
#Remember, a map stores information in key-value pairs, where the keys are always unique. When implemented with arrays, a map might look something like this: my_map = [[k1, v1], [k2, v2], [k3, v2], ...].
#Our Map class should have the following instance methods: set(key, value), get(key), delete(key), show. Note that the set method can be used to either create a new key-value pair or update the value for a pre-existing key. It's up to you to check whether a key currently exists!
#As always, test your code thoroughly to make sure all properties of maps are enforced.

