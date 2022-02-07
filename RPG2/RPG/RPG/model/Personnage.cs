using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RPG.model
{
    class Personnage
    {
        private Statistiques stats;
        private Status status;

        public Personnage()
        {
            this.stats = new Statistiques();
            this.status = new Status();
        }
        public Personnage(int hp, int lvl)
        {
            this.stats = new Statistiques(hp, lvl);
            this.status = new Status();
        }

        // Attaque le joueur passé en paramètre
        public void attaque(Personnage personnageAttaquee)
        {
            personnageAttaquee.status.combatantVivant(this.status, this.stats, personnageAttaquee.status, personnageAttaquee.stats);
        }

        // Soigne le joueur passé en paramètre
        public void soins(Personnage personnageSoignee)
        {
            personnageSoignee.stats.recevoirSoins(this.stats);
        }

        public int getpv()
        {
            return this.stats.getpv();
        }

        public int getLvl()
        {
            return this.stats.getLvl();
        }
    }
}
