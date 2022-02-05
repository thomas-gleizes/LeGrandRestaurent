import pytest
from typing import List

from www.model import Serveur, Restaurant


class ServeurBuilder:

    @staticmethod
    def create_serveurs(nb: int) -> List[Serveur]:
        return [Serveur("no name", 0) for _ in range(nb)]


@pytest.fixture(scope='function', params=[0, 1, 2, 100])
def nb_serveur(request):
    return request.param


def test_restaurant_chaque_serveur_fait_une_commande(nb_serveur: int):
    list_de_serveurs: List[Serveur] = ServeurBuilder.create_serveurs(nb_serveur)
    mon_restaurant = Restaurant(list_de_serveurs)

    montant_total = 0
    montant_commande = 1.0
    for serveur in list_de_serveurs:
        serveur.prendre_commande(montant_commande)
        montant_total += montant_commande

    assert mon_restaurant.chiffre_affaires() == montant_total