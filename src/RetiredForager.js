var RetiredForagerBee = function() {
  Grub.call(this);
  ForagerBee.call(this);
  this.treasureChest = [];
  this.age = 40;
  this.job = "gamble";
  this.canFly = false;
  this.color = "grey";
};

RetiredForagerBee.prototype = Object.create(Grub.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
RetiredForagerBee.prototype.forage = function() {
  return "I am too old, let me play cards instead";
};
RetiredForagerBee.prototype.gamble = function() {
  this.treasureChest.push("treasure");
};

/*
var ForagerBee = function(food) {
  Bee.call(this, food);
  this.age = 10;
  this.job = "find pollen";
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.prototype.forage = function() {
  this.treasureChest.push("treasure");
};
*/
