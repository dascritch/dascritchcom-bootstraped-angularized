# Dascritch.com avec Bootstrap et AngularJS
=========================================================

*Exercice de ré-écriture de [mon site corporate](http://dascritch.com) à la demande d'un recruteur*

## Configuration :
------------------

* Apache 

	* avec module headers (pour rappel : `a2enmod headers` puis redémarrer apache)

	* avec .htaccess autorisé dans le répertoire public


## Remarques :
--------------

* Le site est délivré en statique, car il n'y a pas besoin d'aller au-delà

* Les données appelées dynamiquement par Angular sont donc stockées et délivrées en statique

* as usual, syntaxe XHTML5, because i can

* de commentaires superflus sont gardés dans le hjtml livré, afin de permettre la dissection du travail

* je repasse en jQuery 1, donc je garde une éventuelle comptabilité IE8-. Oui, c'est censé être inutile

* J'aurais jamais ré-utilisé Bootstrap, Foundation est bien plus léger en terme de layouts et de règles CSS. Bon, il est vrai que Bootstrap v3 est largement moins lourd et ignoble dans sa CSS que Bootstrap v2, mais quand même…

* Idem pour AngularJS qui est précisément overkill dans cette situation, ReactJS aurait été bien meilleur

* Évidemment, Bootstrap et Angular alourdissent l'usage de microformats tels que hcard :(

* De par les principes même d'AngularJS, il est évidemment impossible de faire du référencement naturel, ce qui serait contreproductif dans notre cas

## TODO THIS :
--------------

* script de build et de compression css/js

* humans.txt

* un script cron pour récupérer en local les billets du [blog](http://dascritch.net) (webdev, self business, conférences,…)


## TODO VERSIONS :
------------------

* une version statique en Foundation / React.js

* une version dotclear avec base partagée

* une version à la Bruno Bord (markdown, et c'est franchement pas pour indéxer)