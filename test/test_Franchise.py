import pytest
from typing import List

from test.test_restaurant import ServeurBuilder
from www.model import Restaurant, Serveur, Franchise


class RestaurantBuilder:

    @staticmethod
    def create_restaurants(list_of_list_serveurs: List[List[Serveur]]) -> List[Restaurant]:
        return [Restaurant(list_serveurs) for list_serveurs in list_of_list_serveurs]


@pytest.fixture(scope='function', params=[0, 1, 2, 100])
def nb_serveur(request):
    return request.param


@pytest.fixture(scope='function', params=[0, 1, 2, 100])
def nb_restaurant(request):
    return request.param


def test_chaque_serveurs_de_chaque_restaurant_prendre_commande(nb_restaurant, nb_serveur):
    list_of_list_serveur: List[List[Serveur]] = []
    for _ in range(nb_restaurant):
        list_serveurs = ServeurBuilder.create_serveurs(nb_serveur)
        list_of_list_serveur.append(list_serveurs)
    list_restaurants = RestaurantBuilder.create_restaurants(list_of_list_serveur)
    ma_franchise = Franchise(list_restaurants)

    montant_total = 0
    montant_commande = 1.0
    for list_serveurs in list_of_list_serveur:
        for serveur in list_serveurs:
            serveur.prendre_commande(montant_commande)
            montant_total += montant_commande

    assert ma_franchise.chiffre_affaires() == montant_total
