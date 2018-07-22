import java.util.Comparator;
import java.util.function.BinaryOperator;

public class BinaryOperatorExample {

    public static void main(String[] args) {

        BinaryOperator<Integer> bi = BinaryOperator.maxBy(Comparator.reverseOrder());
        System.out.println(bi.apply(2, 3));
    }
}
