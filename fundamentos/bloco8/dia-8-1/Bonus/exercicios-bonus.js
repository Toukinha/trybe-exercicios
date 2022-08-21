const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

const dragonDamege = () => {
  const minDmg = 15;
  const dmg = Math.floor(Math.random() * (battleMembers.dragon.strength ));
  
  return dmg > minDmg ? dmg : minDmg;
}

const warriorDamage = () => {
  const minDmg = 30;
  const dmg = Math.floor(Math.random() * (battleMembers.warrior.strength * battleMembers.warrior.weaponDmg));
  
  return dmg > minDmg ? dmg : minDmg;
}
console.log(warriorDamage());
const mageDamage = () => Math.floor(Math.random() * ((battleMembers.mage.intelligence * 2) - battleMembers.mage.intelligence  + 1) + battleMembers.warrior.strength)

const game = (dragon, mage, warrior) => {
  const gameAction = {

  };
};

