//Exercise Pokemon
/*class PokemonStat {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }


    attackPokemon(target) {
        let Luck = this.Luck();
        if(this.Luck()){
            let damage = this.attack - target.defense;
            target.hp -= damage;

            console.log(`${this.name} attaque ${target.name} et inflige ${damage} dégâts.`);
            console.log(`${target.name} a maintenant ${target.hp} points de vie.`);

            if (target.hp <= 0) {
                console.log(`${target.name} est mort !`);
            }

        }else{
            console.log("RATE !!")
        }

    }
    Luck() {
        return Math.random() < this.luck;
    }
}

var pokemon1 = new PokemonStat("Pokemon 1", 15, 4, 30, 0.2);
var pokemon2 = new PokemonStat("Pokemon 2", 10, 4, 18, 0.8);

while (pokemon1.hp > 0 && pokemon2.hp > 0) {
    pokemon1.attackPokemon(pokemon2);
    if (pokemon2.hp <= 0) {
        break;
    }

    pokemon2.attackPokemon(pokemon1);
    if (pokemon1.hp <= 0) {
        break;
    }
}*/
