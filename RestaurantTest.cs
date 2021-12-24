using LeGrandRestaurant.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeGrandRestaurant
{
    class RestaurantTest
    {
        private static Serveur[] serveurs = new ServeurGenerator().Generate(3).ToArray();
        private static Restaurant restaurant = new Restaurant(serveurs);

        public void command()
        {
            decimal prixCommande = 34.6M;

            foreach(Serveur serveur in serveurs)
                serveur.PrendreCommande(prixCommande);

            restaurant.ChiffreAffaires.Equals(prixCommande * serveurs.Length);
        }

        public void commandPrixZero()
        {
            decimal prixCommande = 0;

            foreach (Serveur serveur in serveurs)
                serveur.PrendreCommande(prixCommande);

            restaurant.ChiffreAffaires.Equals(prixCommande * serveurs.Length);
        }

        public void commandPrixNegatif()
        {
            decimal prixCommande = -10.7M;

            foreach (Serveur serveur in serveurs)
                serveur.PrendreCommande(prixCommande);

            restaurant.ChiffreAffaires.Equals(prixCommande * serveurs.Length);
        }

    }

}
