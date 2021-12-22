package app.utils;

import app.Serveur;

public class ServeurBuilder {
    private String nom;

    public ServeurBuilder nomme(String nom) {
        this.nom = nom;
        return this;
    }

    public Serveur build() {
        return new Serveur(this.nom, 0);
    }

}
