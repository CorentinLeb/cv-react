import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <h3>Expériences</h3>
            <div className="exp-1">
                <h4>Stagiaire chez <a href="https://www.wstdev.com/" target="_blank">We Start Today</a></h4>
                <h5>Avril 2021</h5>
                <p>Refonte du site Straight and Alert en utilisant le CMS Wordpress. Mise en place de l'environnement de travail, sélection des plug-ins appropriés, utilisation et personnalisation d'un theme builder.</p>
            </div>
            <div className="exp-2">
                <h4>Vendeur Conseil en Magasin</h4>
                <h5>2015-2017</h5>
                <p>Accueil des clients en magasin, conseils personnalisés, gestion des stocks, objectifs de vente et travail en équipe.</p>
            </div>
        </div>
    );
};

export default Experience;