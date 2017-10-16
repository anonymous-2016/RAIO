// https://docs.oracle.com/javase/tutorial/essential/environment/cmdLineArgs.html


public class Echo {
    public static void main (String[] args) {
        for (String s: args) {
            System.out.println(s);
        }
    }
}
