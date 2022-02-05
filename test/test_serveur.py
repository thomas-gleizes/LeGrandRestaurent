from www.model import Serveur


class DummyServeur(Serveur):

    def __init__(self):
        super(DummyServeur, self).__init__("Dummy", 0)


def test_prendre_commande():
    dummy_serveur = DummyServeur()

    dummy_serveur.prendre_commande(3)

    assert dummy_serveur.chiffre_affaires == 3


def test_prendre_commande_montant_negatif():
    dummy_serveur = DummyServeur()

    dummy_serveur.prendre_commande(-1)

    assert dummy_serveur.chiffre_affaires == 0


def test_get_chiffre_affaires():
    dummy_serveur = DummyServeur()

    assert dummy_serveur.get_chiffre_affaires() == 0


def test_get_chiffre_affaires_after_2_commandes():
    dummy_serveur = DummyServeur()

    montant_commande1 = 2.9
    montant_commande2 = 7.4
    dummy_serveur.prendre_commande(montant_commande1)
    dummy_serveur.prendre_commande(montant_commande2)

    total = montant_commande1 + montant_commande2
    assert dummy_serveur.chiffre_affaires == total
