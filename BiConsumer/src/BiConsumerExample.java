import java.util.function.BiConsumer;

public class BiConsumerExample {
    public static void main(String[] args) {
        BiConsumer<String, String> biConsumer = (x, y) -> {
            System.out.println(x);
            System.out.println(y);
        };

        biConsumer.andThen(biConsumer).accept("Ayana", "Sakai");
    }
}

/* result is ...

   Ayana
   Sakai
   Ayana
   Sakai
*/