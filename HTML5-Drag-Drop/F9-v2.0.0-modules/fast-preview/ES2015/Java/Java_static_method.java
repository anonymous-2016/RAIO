// Java static method
class Languages {
    public static void main(String[] args) {
        display();
    }
    static void display() {
        System.out.println("Java is my favorite programming language.");
    }
}


// Java static method vs instance method
class Difference {
    public static void main(String[] args) {
        display();  //calling without object
        Difference t = new Difference();// ??? recursive call itself ???
        t.show();  //calling using object
    }
    static void display() {
        System.out.println("Programming is amazing.");
    }
    void show(){
        System.out.println("Java is awesome.");
    }
}


// Using static method of another classes

import java.lang.Math;

class Another {
    public static void main(String[] args) {
        int result;
        result = Math.min(10, 20); 
        //calling static method min by writing class name
        System.out.println(result);
        System.out.println(Math.max(100, 200));
    }
}



/* 

http://www.programmingsimplified.com/


# java-static-method-program

1. no needs a new instance, call Class's static function
2. need you Class's name as a prefix, before static function name

http://www.programmingsimplified.com/java/source-code/java-static-method-program


*/