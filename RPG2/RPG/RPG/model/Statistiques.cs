using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RPG.model
{
    class Statistiques
    {
        private int pointDeVie;
        private int niveau;

        public Statistiques()
        {
            this.pointDeVie = 1000;
            this.niveau = 1;
        }

        public Statistiques(int hp, int lvl)
        {
            this.pointDeVie = hp;
            this.niveau = lvl;
        }

        public void recevoirDegats(Statistiques statsAttaquant, Status statusAttaquee)
        {
            // Si les deux joueur sont vivant, l'attaque s'effectue
            if(this.pointDeVie > 0 && statsAttaquant.pointDeVie > 0)
                this.pointDeVie -= statsAttaquant.niveau;

            if(this.pointDeVie <= 0)
                statusAttaquee.isDead(statsAttaquant);
        }

        public void levelUp()
        {
            this.niveau++;
        }

        // Healing - SET
        public void recevoirSoins(Statistiques statHealer)
        {
            if(this.pointDeVie > 0 && statHealer.pointDeVie > 0)
                this.pointDeVie += statHealer.niveau;
            
            if (this.pointDeVie > 1000)
                this.pointDeVie = 1000;
        }


        public int getpv()
        {
            return this.pointDeVie;
        }

        public int getLvl()
        {
            return this.niveau;
        }

    }
}
