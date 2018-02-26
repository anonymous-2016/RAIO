/*

http://www.nowamagic.net/datastructures/ds_JavascriptChainedList.php

https://segmentfault.com/a/1190000008706650


什么是链表

要存储多个元素，数组可能是最常用的数据结构。这种数据结构非常方便，但是有一个缺点：从数组的起点或者中间插入或移除项的成本非常高，因为需要移动元素（比如你插入一个元素后面的所有的元素都移动了“位置”）。

链表存储有序的元素集合，但是不同于数组，链表中的元素在内存中并不是连续放置的。
每个元素都是由一个存储元素本身的节点和一个指向下一元素的引用（也叫指针或者链接）组成。


https://leetcodechina.com/problems/add-two-numbers/description/
*/

var createLinkList = function(){
    var _this = {},
        first = null;
    _this.add = function(val) {
        first = {
            data: val,
            next: first || null
        };//这句比较重要
    }
    return _this;
}

var linksList = createLinkList(); // 创建一个单链表实例
    linksList.add("jelle"); // 向链表添加一个元素
    linksList.add("you");// 再次添加元素




var createLinkList = function(){
    var _this = {}, first = null;
        _this.length = 0;
    _this.add = function(val) {
        first = {data:val, next: first || null};
        _this.length++;
    }

    // del
    _this.del = function(val){
        if (first.data == val){
            first = first.next;
            return ;
        }
        var ptemp = temp = first;
        for( ; temp; ptemp = temp ,temp= temp.next){

            if(temp.data == val){
                ptemp.next = temp.next;
                _this.length--;
                return ;
            }
        }
    }

    // get
    _this.get = function(val){

        for( var temp = first ; temp; temp= temp.next){
            if(temp.data == val){
                alert( temp )
            }
        }
    }

    //
    _this.show = function(fn) {
        for(temp=first;temp;temp=temp.next) {
            fn(temp.data);
        }
    }

    return _this;
}

var linksList = createLinkList(); // 创建一个单链表实例
    linksList.add("NowaMagic"); // 向链表添加一个元素
    linksList.add("Gonn");// 再次添加元素
    linksList.add(1);

function linkslista(){
    var text = '';
    linksList.show(function(data){
        text += '-'+ data;
    });
    document.getElementById('linkslist').value = text;
}

linkslista();








// 创建一个链表

function LinkedList() {
    // 节点元素本身 & 一个指向下一元素的指针
    var Node = function(element) {
        this.element = element;
        this.next = null;
    }
    // 各种方法
    // 要循环访问列表中的所有元素，就需要有一个起点，就是head
    this.append = function(element) {
        var node = new Node(element), //传入值创建Node项
            current;
        if(head === null) { //如果为空链表
            head = node; //设置node为head（head为第一个节点的引用）
        } else {
            current = head; //从表头开始
            while(current.next) {
                //循环列表，找到最后一项（列表最后一个节点的下一个元素始终是null）
                current = current.next;
            }
            //使当前最后一项的指针指向node
            current.next = node;
        }
        length++; //更新列表长度
    };
    // 输入位置，从特定位置移除一个元素
    this.removeAt = function(position) {
        if(position > -1 && position < length) { //有效性检测
            var current = head, //用current来循环列表
            previous,
            index = 0;
            if(position === 0) {
                head = current.next; //移除第一个元素，直接把head指向下一个元素
            } else {
                while(index++ < position) { //循环列表找到满足条件的那个元素
                    previous = current; //
                    current = current.next; //把下一个变量覆给current
                }
                //跳过current，将当前要移除的元素的上一个与下一项直接连接起来。
                previous.next = current.next;
            }
            length --;
            return current.element;
        } else {
            return null;
        }
    }
    // 在任意位置插入一个元素
    this.insert = function (position, element) {
        if(position >= 0 && position <= length) {
            var node = new Node(element),
                current = head; //通过current从head位置开始迭代
                previous,
                index = 0;
            if(position === 0) { //第一个位置
                node.next = current; //此时current = head,指向head那么node就成了第一个
                head = node; //node指向为head
            } else {
                while (index++ < position ) { //循环迭代到目标位置
                    previous = current;
                    current = current.next;
                }
                node.next = current; // node的下一个为current
                previous.next = node; // node的上一个位置为previous
            }
            length++;
            return true;
        } else {
            return false;
        }
    }
    // 把 LinkedList 对象转换成一个字符串。
    this.toString = function() {
        var current = head,
            string = '';
        while(current) { //循环访问列表
            string += current.element + (current.next ? '\n' : '');
            current = current.next;
        }
        return string; //返回字符串
    }
    // 返回元素的位置
    this.indexOf = function(element) {
        var current = head,
            index = 0;
        while(current) {
            if(element === current.element) {
                return index; //找到返回当前位置
            }
            index ++;
            current = current.next;
        }
        return -1;    //找不到返回-1
    }
    // 输入元素，移除该元素
    this.remove = function(element) {
        var index = this.indexOf(element); //得到元素的位置
        return this.removeAt(index); //移除该元素
    }
    // 判断是否为空 得到长度 得到第一个元素
    this.isEmpty = function () {
        return length === 0;
    }
    this.size = function () {
        return length;
    }
    this.getHead = function () {
        return head;
    }
}



var list = new LinkedList();
list.append(15);
list.append(10);









/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    //
};
