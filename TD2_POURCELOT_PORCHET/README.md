## **Pourcelot - Porchet**

#**Le design pattern le plus adapté pour répondre à ce besoin est le pattern Décorateur.**

#**Justification du choix :**

Le pattern Décorateur permet d'ajouter dynamiquement des fonctionnalités à un objet sans modifier sa structure de 
base. Dans notre cas, il permet d'ajouter des options (lait, sucre, caramel, etc.) à une boisson de manière 
flexible et cumulative, sans altérer la définition des boissons de base. Ainsi, la consigne "Il doit être possible 
d’en ajouter de nouvelles ultérieurement, sans avoir à modifier le code existant des boissons de base." est respectée.