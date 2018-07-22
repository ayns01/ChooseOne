import java.util.ArrayList;
import java.util.Arrays;
import java.util.function.BiFunction;

public class BiFunctionExample {
    public static void main(String[] args) {

        BiFunction<ArrayList<Integer>, ArrayList<Integer>, ArrayList<Integer>> bi = (list1, list2) -> {

            ArrayList<Integer> list3 = new ArrayList<>();
            for(Integer i : list1)
            {
                list3.add(i);
            }
            for (Integer i : list2)
            {
                list3.add(i);
            }

            return list3;
        };

        ArrayList<Integer> list1 = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
        ArrayList<Integer> list2 = new ArrayList<>(Arrays.asList(6, 7, 8, 9, 10));
        System.out.println(bi.apply(list1, list2).size());
    }
}
