Ce code est une application React qui simule un site web de pizzeria avec plusieurs composants : Header, Menu, Pizza et Footer. Le composant principal App structure l'application en affichant ces différents composants dans une div conteneur.

Le composant Header affiche un titre avec un style personnalisé. Le composant Menu récupère une liste de pizzas depuis la variable pizzaData, et utilise une expression conditionnelle pour afficher soit une liste de pizzas disponibles, soit un message d'indisponibilité s'il n'y a pas de pizzas.

Le composant Pizza prend en charge l'affichage de chaque pizza avec son nom, ses ingrédients, son prix, et une image correspondante. Si une pizza est épuisée (soldOut), la classe CSS applique un style différent pour griser l'élément et afficher le texte "STOCK ÉPUISÉ".

Le composant Footer affiche un message d'ouverture basé sur l'heure actuelle et permet de passer une commande lorsque la pizzeria est ouverte, entre 11h et 23h. Le composant Horaire, utilisé dans le Footer, affiche les heures d'ouverture de la pizzeria.

L'application récupère et rend la liste des pizzas en utilisant ReactDOM.createRoot pour l'affichage dynamique dans l'élément HTML avec l'ID "root".
