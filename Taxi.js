//Exercise Taxi
var Musique = ["Anissa - Wejdene", "English Summer - OtherLives", "Little Things - Jorah Smith",
    "Let It Happen - TameInpala", "Smooth Operator - Sade" ]

var feuxRouge = 30
var NbChangement = 0
class PersonnageParameter{
    constructor(name, Sanity){
        this.name = name
        this.Sanity = Sanity
    }
    FeuxRougeEncounter(){
        var RandomNum = Math.floor(Math.random() * 5)

        feuxRouge--
        console.log(`La musique jouée à la radio est : ${Musique[RandomNum]}`)

        if(RandomNum === 0){
            NbChangement++
            this.Sanity--
            console.log(`Changement de Taxi...`)
        }else{
        }
        console.log(`Il reste ${feuxRouge} feux rouges restants`)
        console.log(`La sanité de ${this.name} est à ${this.Sanity}`)
    }
}
var Personnage = new PersonnageParameter("Michael", 10)
while(Personnage.Sanity > 0 || feuxRouge > 0 )
{
    Personnage.FeuxRougeEncounter()
    if(Personnage.Sanity <= 0){
        console.log(`${Personnage.name} à changé ${NbChangement} fois de taxis avant d'exploser`)
        break
    }else if(feuxRouge <= 0){
        console.log(`${Personnage.name} est arrivé à destination après avoir changer ${NbChangement} fois de taxis`)
        break
    }

}
