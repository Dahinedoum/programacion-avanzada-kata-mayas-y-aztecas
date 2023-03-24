//New: `this` & `new` & `extends` (look at Notion)

// **Warrior**:

class Warrior {
    constructor(life, power) {
      this.life = life;   //https://www.notion.so/Important-JS-9fa5c2a2bf2a4b8ab50375aed1a93018
      this.power = power;
    }
    
    attack() {
      return this.power;
    }
    
    defend(damage) {
      this.life -= damage;
      console.log(`Vida restante: ${this.life}`);//imprimirá en la consola el mensaje "Vida restante:" seguido del valor actual de life.

    }
  }
  

//**Maya: extiende de la clase Warrior** 
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/extends

class Maya extends Warrior {
  constructor(life, power) {
    super(life, power);
  }

  drinkColaCao() {
    this.power += 10;
  }
}

//**Aztec: extiende de la clase Warrior** 

class Aztec extends Warrior {
  constructor(life, power) {
    super(life, power);
  }

  drinkNesquik() {
    this.life += 10;
  }
}

//3. cadena de intercambio de golpes.

const aztec = new Aztec(100, 20);
const maya = new Maya(100, 20);


// Cadena de intercambio de golpes
aztec.drinkNesquik();
maya.drinkColaCao();

aztec.defend(maya.attack());
maya.defend(aztec.attack());
