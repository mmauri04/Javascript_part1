/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
// console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var numberOfTry = 0; //nombre d'essais

while(numberOfTry <= 6){
	numberOfTry++;
	var yourChoise = Number(prompt("Entrez un nombre entre 1 et 100:"));

	if((yourChoise > 1) || (yourChoise < 100)){
		if(numberOfTry <= 6){
			if(yourChoise > solution){
				console.log(numberOfTry + ": " + yourChoise + " est trop grand");
			}
			else if(yourChoise < solution){
				console.log(numberOfTry + ": " + yourChoise + " est trop petit");
			}
			else{
				console.log("Bravo! La solution était " + solution +"\nVous avez trouvé la solution en " + numberOfTry + " essai(s)");
				break;
			}
		}
		else{ // Si l'utilisateur ne devine pas en 6 essais
			console.log("Perdu... La solution était " + solution);
		}
	}
	else{ //Si l'utilisateur ne rentre pas un nombre
		if(numberOfTry > 6){
			console.log("Perdu... La solution était " + solution);
		}
		else{
			console.log(numberOfTry + ": " + "Veuillez entrer un nombre valide");
		}
	}
}