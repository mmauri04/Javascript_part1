/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var proposition = "";
var nbEssai = "";

while((proposition !== solution) && (nbEssai < 6)){
    nbEssai++;
    proposition = Number(prompt("Saisez votre proposition de réponse " + nbEssai + " :"));
    if(proposition < solution){
        console.log(proposition + " est trop petit");
    }else if(proposition > solution){
        console.log(proposition + " est trop grand");
                    }
}
     
                    
if(proposition === solution){
            console.log("Bravo !! Vous avez gagné, la solution était " + solution);
            console.log("Vous avez trouvé en " + nbEssai + " essai(s)");
            
        }else{
            console.log("Vous avez perdu... La soltuion était " +solution );
        }
