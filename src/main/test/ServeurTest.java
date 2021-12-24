import app.Serveur;
import app.utils.ServeurBuilder;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ServeurTest {

    private static ServeurBuilder builder;

    @BeforeAll
    static void setup() {
        builder = new ServeurBuilder();
    }

    @Test
    void testCAPositifFloat() {
        Serveur serveur = builder.nomme("thomas").build();
        float montant = (float) -20.54;

        serveur.PrendreCommande(montant);
        assertEquals(montant, serveur.ChiffreAffaires);
    }

    @Test
    void testCaNegatif() {
        Serveur serveur = builder.nomme("Thomas").build();
        float montant = (float) -20.54;

        serveur.PrendreCommande(montant);
        assertEquals(montant, serveur.ChiffreAffaires);
    }

    @Test
    void testCaZero() {
        Serveur serveur = builder.nomme("serveur").build();
        int montant = 0;

        serveur.PrendreCommande(montant);
        assertEquals(montant, serveur.ChiffreAffaires);
    }

    @Test
    void testNouveauServeurCAequalAZero() {
        Serveur serveur = builder.nomme("serveur").build();

        assertEquals(0, serveur.getChiffreAffaires());
    }

    @Test
    void testDoublecommanded() {
        Serveur serveur = builder.nomme("double").build();

        float montant1 = (float) 10.3;
        float montant2 = (float) 30.2;

        serveur.PrendreCommande(montant1);
        serveur.PrendreCommande(montant2);

        assertEquals(montant1 + montant2, serveur.getChiffreAffaires());
    }
}