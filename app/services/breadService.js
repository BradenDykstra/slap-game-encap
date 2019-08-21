import Bread from "../models/bread.js";
import Potion from "../models/potion.js";
import Shield from "../models/shield.js";
import Armor from "../models/armor.js";
import BPotion from "../models/bPotion.js";
import Sword from "../models/sword.js";
import Bow from "../models/bow.js";

let _bread = new Bread;
let _potion = new Potion;
let _shield = new Shield;
let _armor = new Armor;
let _bPotion = new BPotion;
let _sword = new Sword;
let _bow = new Bow;

export default class BreadService {
  slap() {
    _bread.health -= this.addMods(1);
  }

  shinKick() {
    _bread.health -= this.addMods(2);
  }

  burn() {
    _bread.health -= this.addMods(3);
  }

  giveItem(item) {
    if (item == "hPotion") {
      if (_bread.health < 100 && _bread.health > 75) {
        _bread.health = 100;
      } else {
        _bread.health += _potion.healAmount;
      }
    } else if (item == "shield" && _bread.pItems.length <= 3) {
      _bread.pItems.push(_shield);
    } else if (item == "armor" && _bread.pItems.length <= 3) {
      _bread.pItems.push(_armor);
    } else if (item == "sword" && _bread.nItems.length <= 3) {
      _bread.nItems.push(_sword);
    } else if (item == "bow" && _bread.nItems.length <= 3) {
      _bread.nItems.push(_bow);
    } else if (item == "bPotion") {
      _bread.nItems = [];
      _bread.pItems = [];
    }
  }

  addMods(damage) {
    let total = damage;
    for (let i in _bread.pItems) {
      total /= _bread.pItems[i].defenseMod;
    }
    for (let i in _bread.nItems) {
      total /= _bread.nItems[i].defenseMod;
    }
    return Math.ceil(total);
  }

  get Bread() {
    return _bread;
  }

  reset() {
    _bread.health = 100;
    _bread.pItems = [];
    _bread.nItems = [];
  }
}