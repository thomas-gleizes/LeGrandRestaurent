import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ServeurTest {

    private Serveur serveur;

    @BeforeEach
    void setup() {
        serveur = new Serveur("Thomas", 1002);
    }

    @Test
    void setChiffreAffaires() {
        serveur.setChiffreAffaires(10);

        assertEquals(10, serveur.getChiffreAffaires());
    }

    @Test
    void prendreCommandeA10e() {
        serveur.PrendreCommande(10);

        assertEquals(10, serveur.ChiffreAffaires);
    }

    @Test
    void prendreCommandeAmoins10E() {
        serveur.PrendreCommande(-10);

        assertEquals(-10, serveur.ChiffreAffaires);
    }

    @Test
    void prendreCommandeAZero() {
        serveur.PrendreCommande(0);

        assertEquals(0, serveur.ChiffreAffaires);
    }
}