/*


Lambda expression

A function defined without being bound to an identifier.


ramda ???

https://github.com/ramda/ramda

http://ramdajs.com/


https://github.com/ramda/ramda/wiki/Cookbook

http://ramda.cn/

Ramda ："一个实用的 JavaScript 函数式编程库"。
Ramda 包含了所有你想要的列表操作函数，像 map、filter、reduce 和 find 等。

1. Ramda 先接受函数参数，最后接受数据参数。

```js

// Underscore/Lodash style:
var validUsersNamedBuzz = function(users) {
    return _.filter(users, function(user) { 
        return user.name === 'Buzz' && _.isEmpty(user.errors); 
    });
};



// Ramda style:
var validUsersNamedBuzz = R.filter(R.where({name: 'Buzz', errors: R.isEmpty}));


```

2. Ramda 的函数是自动柯里化的 。
Ramda 中所有的多元（多参数）函数都默认是柯里化的。


```js
// `prop` takes two arguments. If I just give it one, I get a function back
var moo = R.prop('moo');

// when I call that function with one argument, I get the result.
var value = moo({moo: 'cow'}); // => 'cow'

```

这种自动柯里化使得 "通过组合函数来创建新函数" 变得非常容易。
因为 API 都是函数优先、数据最后（先传函数，最后传数据参数），你可以不断地组合函数，直到创建出需要的新函数，然后将数据传入其中。

```js

// take an object with an `amount` property add one to it find its remainder when divided by 7
var amtAdd1Mod7 = R.compose(R.moduloBy(7), R.add(1), R.prop('amount'));

// we can use that as is:
amtAdd1Mod7({amount: 17}); // => 4
amtAdd1Mod7({amount: 987}); // => 1
amtAdd1Mod7({amount: 68}); // => 6
// etc. 

// But we can also use our composed function on a list of objects, e.g. to `map`:
var amountObjects = [
    {amount: 903}, {amount: 2875654}, {amount: 6}
]
R.map(amtAdd1Mod7, amountObjects); // => [1, 6, 0]

// of course, `map` is also curried, so you can generate a new function using `amtAdd1Mod7` that will wait for a list of "amountObjects" to et passed in:
var amountsToValue = map(amtAdd1Mod7);
amountsToValue(amountObjects); // => [1, 6, 0]


```







现在已经存在一些优秀的函数式库，如 Underscore 和 Lodash。

https://adispring.coding.me/2017/06/25/Introducing-Ramda/

https://buzzdecafe.github.io/code/2014/05/16/introducing-ramda




*/




/* 

ES6 Arrow Function === Java 8 Lambda Expression

https://gist.github.com/ericelliott/414be9be82128443f6df

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
https://developer.mozilla.org/en-US/docs/New_Compatibility_Tables_Beta


https://www.vinta.com.br/blog/2015/javascript-lambda-and-arrow-functions/
http://www.i-programmer.info/programming/javascript/1031-javascript-jems-lambda-expressions.html
https://medium.com/functional-javascript/lambda-calculus-in-javascript-part-1-28ff63824d4d

http://gunicorn.org/

Gunicorn 'Green Unicorn' is a Python WSGI HTTP Server for UNIX. 

https://github.com/benoitc/gunicorn


*/


/* 

@Overrides

https://docs.oracle.com/javase/tutorial/java/IandI/override.html


https://stackoverflow.com/questions/94361/when-do-you-use-javas-override-annotation-and-why

Use it every time you override a method for two benefits. 
Do it so that you can take advantage of the compiler checking to make sure you actually are overriding a method when you think you are.
This way, if you make a common mistake of misspelling a method name or not correctly matching the parameters, you will be warned that you method does not actually override as you think it does.
Secondly, it makes your code easier to understand because it is more obvious when methods are overwritten.

Additionally, in Java 1.6 you can use it to mark when a method implements an interface for the same benefits.
I think it would be better to have a separate annotation (like @Implements), but it's better than nothing.

https://www.tutorialspoint.com/java/java_overriding.htm



In the previous chapter, we talked about superclasses and subclasses.

If a class inherits a method from its superclass, 
then there is a chance to override the method provided that it is not marked final.

The benefit of overriding is: ability to define a behavior that's specific to the subclass type, 
which means a subclass can implement a parent class method based on its requirement.

In object-oriented terms, overriding means to override the functionality of an existing method.


https://play.google.com/store/apps/details?id=com.tutorialspoint.offlineviewer.java


```java

class Animal {
    public void move() {
        System.out.println("Animals can move");
    }
}

class Dog extends Animal {
    public void move() {
        System.out.println("Dogs can walk and run");
    }
}

public class TestDog {
    public static void main(String args[]) {
        Animal a = new Animal();// Animal reference and object
        Animal b = new Dog();// Animal reference but Dog object

        a.move();// runs the method in Animal class
        b.move();// runs the method in Dog class
    }
}

```



*/


/*

http://www.oracle.com/webfolder/technetwork/tutorials/obe/java/Lambda-QuickStart/index.html

Java SE 8


Argument List   Arrow Token   Body
        (x, y)       ->       x + y

(int x, int y)       ->       x + y
(int x, int y)       ->       return x + y
(int x, int y)       ->       {return x + y}

```java



```


https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html



https://www.tutorialspoint.com/java8/java8_lambda_expressions.htm

Lambda expressions are introduced in Java 8 and are touted to be the biggest feature of Java 8.
Lambda expression facilitates functional programming, and simplifies the development a lot.


```java

parameter -> expression body

```

https://www.tutorialspoint.com/compile_java_online.php

> Lambda Expressions Example (JDK 1.8.0)

```java

public class Java8Tester {

   public static void main(String args[]) {
      Java8Tester tester = new Java8Tester();

      //with type declaration
      MathOperation addition = (int a, int b) -> a + b;

      //with out type declaration
      MathOperation subtraction = (a, b) -> a - b;

      //with return statement along with curly braces
      MathOperation multiplication = (int a, int b) -> { return a * b; };

      //without return statement and without curly braces
      MathOperation division = (int a, int b) -> a / b;

      System.out.println("10 + 5 = " + tester.operate(10, 5, addition));
      System.out.println("10 - 5 = " + tester.operate(10, 5, subtraction));
      System.out.println("10 x 5 = " + tester.operate(10, 5, multiplication));
      System.out.println("10 / 5 = " + tester.operate(10, 5, division));

      //without parenthesis
      GreetingService greetService1 = message ->
      System.out.println("Hello " + message);

      //with parenthesis
      GreetingService greetService2 = (message) ->
      System.out.println("Hello " + message);

      greetService1.sayMessage("Mahesh");
      greetService2.sayMessage("Suresh");
   }

   interface MathOperation {
      int operation(int a, int b);
   }

   interface GreetingService {
      void sayMessage(String message);
   }

   private int operate(int a, int b, MathOperation mathOperation) {
      return mathOperation.operation(a, b);
   }
}


```


以下是lambda表达式的重要特征。

1. 可选类型声明

2. 参数周围的可选括号

3. 可选花括号

4. 可选返回关键字





```sh

# 1. Compile the class using javac compiler(.java => .class)

# C:\JAVA>javac Java8Tester.java
$ javac Java8Tester.java

# 2. Run the Java8Tester.class

# C:\JAVA>java Java8Tester
$ java Java8Tester

```

使用lambda表达式，可以引用任何最终变量或有效的最终变量（仅分配一次）。

如果第二次为变量赋值，则Lambda表达式会引发编译错误。

*/






