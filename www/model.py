from typing import List


class Client:
    pass


class Serveur:

    def __init__(self, nom: str, salaire: float):
        self.nom: str = nom
        self.salaire: float = salaire
        self.chiffre_affaires: float = 0.0

    def get_chiffre_affaires(self) -> float:
        return self.chiffre_affaires

    def set_chiffre_affaires(self, chiffre_affaires: float) -> None:
        self.chiffre_affaires = chiffre_affaires

    def prendre_commande(self, montantCommande: float):
        if montantCommande > 0:
            self.chiffre_affaires += montantCommande


class Restaurant:

    def __init__(self, serveurs: List[Serveur]):
        self.serveurs: List[Serveur] = serveurs

    def chiffre_affaires(self):
        total: float = 0
        for serveur in self.serveurs:
            total += serveur.get_chiffre_affaires()
        return total


class Franchise:

    def __init__(self, restaurants: List[Restaurant]):
        self._restaurants: List[Restaurant] = restaurants

    def chiffre_affaires(self):
        total: float = 0
        for restaurant in self._restaurants:
            total += restaurant.chiffre_affaires()
        return total
