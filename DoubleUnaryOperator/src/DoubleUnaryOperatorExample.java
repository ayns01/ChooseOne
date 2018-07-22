import java.util.function.DoubleUnaryOperator;

public class DoubleUnaryOperatorExample {

    public static void main(String[] args) {
        DoubleUnaryOperator square = (x) -> { return x * x;};
        DoubleUnaryOperator doubleValue = (x) -> { return 2 * x;};

        System.out.println(doubleValue.compose(square).applyAsDouble(3.14));
    }
}

/*
* result is 19.7192
* */
