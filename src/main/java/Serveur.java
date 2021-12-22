public class Serveur {
    public float ChiffreAffaires;

    public Serveur(String nom, float salaire) {

    }

    public float getChiffreAffaires() {
        return ChiffreAffaires;
    }

    public void setChiffreAffaires(float chiffreAffaires) {
        ChiffreAffaires = chiffreAffaires;
    }


    public void PrendreCommande(float montantCommande) {
        this.ChiffreAffaires += montantCommande;
    }

}
