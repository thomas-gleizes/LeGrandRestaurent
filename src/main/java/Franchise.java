public class Franchise {

    private final Restaurant[] _restaurants;

    public Franchise(Restaurant[] restaurants) {
        _restaurants = restaurants;
    }

    public float ChiffreAffaires() {
        float total = 0;

        for (Restaurant r : _restaurants) {
            total += r.ChiffreAffaires();
        }

        return total;
    }


}
