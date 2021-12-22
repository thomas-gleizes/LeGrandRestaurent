public class Restaurant {
    private final Serveur[] _serveurs;

    public Restaurant(Serveur[] serveurs) {
        _serveurs = serveurs;
    }

    public float ChiffreAffaires() {
        float total = 0;
        for (Serveur serveur : _serveurs) {
            total += serveur.ChiffreAffaires;
        }
        return total;
    }

}
