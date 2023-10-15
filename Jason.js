var nomsSurvivants = ['Gabriel ', 'Aubin ', 'Victor ', 'Adam ', 'Erwan '];
var caractéristiquesSurvivants = ['Stupide', 'Riche', 'Amoureux', 'Chanceux', 'Sportif'];
var survivantMort = "";

class Survivant {
    constructor(nom, pdv, probabilitéAttaque, probabilitéContreAttaque) {
        this.nom = nom;
        this.pdv = pdv;
        this.probabilitéAttaque = probabilitéAttaque;
        this.probabilitéContreAttaque = probabilitéContreAttaque;
    }

    attaquer(Cible) {
        if (this.probabilitéContreAttaque > Cible.probabilitéContreAttaque) {
            console.log(`${this.nom} esquive et contre attaque ${Cible.nom} et inflige 10 points de dégâts.`);
            Cible.pdv -= 10;
        } else {
            console.log(`${this.nom} Parvient à esquiver puis toucher le tueur en lui ingligeant 15 points de dégats mais trébuche et se fracture la nuque.`);
            Cible.pdv -= 15;
            this.pdv = 0;
        }
    }
}
class Tueur{
    constructor(nom, pdv, dégâts, probabilitéAttaque, probabilitéContreAttaque) {
        this.nom = nom;
        this.pdv = pdv;
        this.dégâts = dégâts;
        this.probabilitéAttaque = probabilitéAttaque;
        this.probabilitéContreAttaque = probabilitéContreAttaque;
    }

    attaquer(cible) {
        if (Math.random() < this.probabilitéAttaque) {
            console.log(`${this.nom} Attrape le cou de ${cible.nom} et le tort, lui infligeant ${this.dégâts} points de dégâts.`);
            cible.pdv -= this.dégâts;
        } else {
            console.log(`${this.nom} tente d'attraper ${cible.nom} pour le tuer.`);


        }
    }
}

var shift = 0;
var shiftStore = [];
for(i=0; i< 5; i++)
{
    shift = Math.floor(Math.random() * 5)
    if(shiftStore.includes(shift))
    {
        while(shiftStore.includes(shift)) {
          //  console.log("On commence la boucle while")
            if (shiftStore.includes(shift) == false) {

                break;
            }else
            {
                shift = Math.floor(Math.random() * 5)
            }
        }
        shiftStore.push(shift)
    }else
    {
        shiftStore.push(shift)
    }
}
let survivants = new Survivant(nomsSurvivants[shiftStore[0]] + caractéristiquesSurvivants[shiftStore[4]], 100, 20, 0.8, 0.5);
let survivants2 = new Survivant(nomsSurvivants[shiftStore[1]] + caractéristiquesSurvivants[shiftStore[3]], 100, 20, 0.7, 0.7);
let survivants3 = new Survivant(nomsSurvivants[shiftStore[2]] + caractéristiquesSurvivants[shiftStore[2]], 100, 20, 0.3, 0.9);
let survivants4 = new Survivant(nomsSurvivants[shiftStore[3]] + caractéristiquesSurvivants[shiftStore[1]], 100, 20, 0.4, 0.3);
let survivants5 = new Survivant(nomsSurvivants[shiftStore[4]] + caractéristiquesSurvivants[shiftStore[0]], 100, 20, 0.6, 0.8);
let tableauSurvivants = [survivants, survivants2, survivants3, survivants4, survivants5];

let tueur = new Tueur("Jason l'Assassin", 100, 100, 0.4, 0.5);

let ActionNum = 1;


while (tableauSurvivants.some(survivant => survivant.pdv > 0) && tueur.pdv > 0) {
    console.log(`Action n°${ActionNum}:`);

    for (var j = 0; j < tableauSurvivants.length; j++) {
        if (tableauSurvivants[j].pdv > 0) {

            tueur.attaquer(tableauSurvivants[j]);

            if (tableauSurvivants[j].pdv <= 0) {
                console.log(`${tueur.nom} a vaincu ${tableauSurvivants[j].nom}`);
                survivantMort += tableauSurvivants[j].nom + ". ";
            }else
            {
                if(tableauSurvivants[j].probabilitéAttaque > tueur.probabilitéAttaque)
                {
                    tableauSurvivants[j].attaquer(tueur)
                    if (tableauSurvivants[j].pdv <= 0) {
                        console.log(`${tableauSurvivants[j].nom} s'est suicider`);
                        survivantMort += tableauSurvivants[j].nom + ". ";
                    }
                }
            }
            console.log(`${tableauSurvivants[j].nom} : ${tableauSurvivants[j].pdv} pdv`);
            console.log(`${tueur.nom} : ${tueur.pdv} pdv`);
        }
    }

    ActionNum++;
}



if (tableauSurvivants[j % tableauSurvivants.length].pdv <= 0) {
    console.log("Tous les survivants ont été massacrés par le tueur ! Le tueur remporte le combat !");
    console.log("RIP : " + survivantMort);
} else if (tueur.pdv <= 0) {
    console.log("Les survivants ont triomphés du tueur !");
    console.log("RIP : " + survivantMort);
} else {
    console.log("Le tueurs n'est pas mort et certains survivont sont encore en vie, les deux camps prennent la fuite !");
    console.log("RIP : " + survivantMort);
}
