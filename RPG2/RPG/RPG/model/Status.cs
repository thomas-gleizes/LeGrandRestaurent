using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RPG.model
{
    class Status
    {
        private bool status;

        public Status()
        {
            this.status = true;
        }

        public void ifDiesLevelUp(Statistiques stats)
        {
            if(this.status == true)
            {
                this.status = false;
                stats.levelUp();
            }
        }


        public void combatantVivant(Status statusAttaquant, Statistiques statsAttaquant, Status statusAttaquee, Statistiques statsAttaquee)
        {
            if(this.status == true && statusAttaquant.status == true)
                statsAttaquee.recevoirDegats(statsAttaquant, statusAttaquee);
            
        }

        public void isDead(Statistiques statsAttaquant)
        {
            if(this.status == true)
            {
                this.status = false;
                statsAttaquant.levelUp();
            }
        }

    }
}
