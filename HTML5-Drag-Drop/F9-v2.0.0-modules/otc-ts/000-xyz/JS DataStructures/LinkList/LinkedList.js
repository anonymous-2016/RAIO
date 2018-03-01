


while(current.next){
    console.log(`true`);
}
// undefined

while(!current.next){
    console.log(`true`);
}
// true (endless loop)

if (current.next){
    console.log(`true`);
} else {
    console.log(`false`);
}
// false

// 链表

function LinkedList() {
    // Node类表示要加入列表的项
    var Node = function(element){
        // {1}
        this.element = element;// 要添加到列表的值
        this.next = null;// 指向列表中下一个节点项的指针
        // 列表最后一个节点的下一个元素始终是null
    };
    var length = 0;// 存储列表项的数量的length属性（内部/私有变量）
    // {2}
    var head = null;// 存储第一个节点
    // {3}
    this.append = function(element){
        // 向列表尾部添加一个新的项
        // 列表为空, 添加的是第一个元素; 或者列表不为空, 向其追加元素
        var node = new Node(element),
            current;
            // current = "";
        if (head === null){
            // 添加列表中第一个节点
            head = node;
        } else {
            // 找到列表中的当前节点
            current = head;
            // 循环列表, 直到找到最后一项
            // current.next !== null
            while(current.next){
                current = current.next;
            }
            // 找到最后一项, 将其next赋为node, 建立链接
            current.next = node;
        }
        length++;
        // 更新列表的长度
        // console.log("append ok!");
    };
    this.insert = function(position, element){
        // 向列表的特定位置插入一个新的项
        // 在列表的起点添加一个元素; 在列表中间或尾部添加一个元素
        // 检查越界值
        if (position >= 0 && position <= length){
            var node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0){
                // 在第一个位置插入
                node.next = current;
                head = node;
            } else {
                while (index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            // 更新列表的长度
            return true;
        } else {
            return false;
        }
    };
    this.remove = function(element){
        // 从列表中移除一项
        // 第一种是移除第一个元素, 第二种是移除第一个以外的任一元素
        // 根据元素的值移除元素
        var index = this.indexOf(element);
        return this.removeAt(index);
    };
    this.removeAt = function(position){
        // 从列表的特定位置移除一项
        // 第一种是移除第一个元素, 第二种是移除第一个以外的任一元素
        // 从特定位置移除一个元素
        // 检查越界值
        if (position > -1 && position < length){
            var current = head,
                previous,
                index = 0;
            // 移除第一项
            if (position === 0){
                head = current.next;
            } else {
                while (index++ < position){
                    previous = current;
                    current = current.next;
                }
                // 将 previous 与 current 的下一项链接起来, 跳过 current, 从而移除它
                previous.next = current.next;
                // 当前元素就会被丢弃在计算机内存中, 等着被垃圾回收器清除
                // 理解JavaScript垃圾回收器如何工作
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management
            }
            length--;
            // 更新列表的长度
            return current.element;
        } else {
            return null;
        }
    };
    this.indexOf = function(element){
        // 返回元素在列表中的索引, 如果列表中没有该元素则返回-1
        var current = head,
            index = -1;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.isEmpty = function() {
        // 如果链表中不包含任何元素, 返回true, 如果链表长度大于0则返回false
        return length === 0;
    };
    this.size = function() {
        // 返回链表包含的元素个数, 与数组的length属性类似
        return length;
    };
    this.toString = function(){
        // 由于列表项使用了Node类, 就需要重写继承自JavaScript对象默认的 toString方法, 让其只输出元素的值
        // 把LinkedList对象的值转换成一个字符串
        var current = head,
            string = '';
        while (current) {
            // 拼接到字符串中
            string += current.element;
            // string = current.element;
            current = current.next;
        }
        return string;
    };
    // 56 & 5.1.4
    this.print = function(){
        // print ???
        console.log(`head =`, head);
    };
    this.getHead = function(){
        // head 变量是 LinkedList类的私有变量
        // (这意味着它不能在LinkedList实例外部被访问和更改, 只有通过 LinkedList实例内部才可以)
        // 如果我们需要在类的实现外部循环访问列表, 就需要提供一种获取类的内部私有变量的方法
        return head;
    };
}



/*


var list = new LinkedList();
list.append(15);
list.append(10);



*/


const LinkedList = () => {
    const Node = (element) => {
        this.element = element;
        this.next = null;
    };
    let length = 0,
        head = null;
    // super();
    // this
    this.append = (element) => {};
    this.insert = (position, element) => {};
    this.removeAt = (position) => {};
    this.remove = (element) => {};
    this.indexOf = (element) => {};
    this.isEmpty = () => {};
    this.size = () => {};
    this.toString = () => {};
    this.print = () => {};
};



