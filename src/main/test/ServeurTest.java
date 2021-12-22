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
}