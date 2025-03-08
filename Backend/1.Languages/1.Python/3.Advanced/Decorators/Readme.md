Decorators in python

There are two of decoratorsin python
1. functional decorators
2. class decorators

functional decorators:
syntax of functional decorator : @mydecorator
A decorator is a function that takes another function and extends the behavior of this function
without explicitly modifying it

Basically it add new functionality to the existing function without explicitly modifying it
@mydecorator
def dosomething():
    pass

In this the functionality of dosemthing function is extended by functionality of @mydecorator decorator

function are first class objects
Python supports the concept of First Class functions.
Properties of first class functions:
A function is an instance of the Object type.
You can store the function in a variable.
You can pass the function as a parameter to another function.
You can return the function from a function.
You can store them in data structures such as hash tables, lists, 