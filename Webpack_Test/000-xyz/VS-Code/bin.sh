#!/bin/sh
#对变量赋值：

a=”hello world”
# 现在打印变量a的内容：
echo “A is:”
echo $a
# 有时候变量名很容易与其他文字混淆，比如：
num=2
echo “this is the $numnd”
# 这并不会打印出”this is the 2nd”，而仅仅打印”this is the “。
# 因为shell会去搜索变量numnd的值，但是这个变量时没有值的。
# 可以使用花括号来告诉shell我们要打印的是num变量：
num=2
echo “this is the ${num}nd”
# 这将打印： this is the 2nd


