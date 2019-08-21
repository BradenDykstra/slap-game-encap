import Toast from "../models/toast.js";
import Potion from "../models/potion.js";
import Shield from "../models/shield.js";
import Armor from "../models/armor.js";
import BPotion from "../models/bPotion.js";
import Sword from "../models/sword.js";
import Bow from "../models/bow.js";

let _toast = new Toast;
let _potion = new Potion;
let _shield = new Shield;
let _armor = new Armor;
let _bPotion = new BPotion;
let _sword = new Sword;
let _bow = new Bow;

export default class ToastService {
  slap() {
    _toast.health -= this.addMods(1);
  }

  shinKick() {
    _toast.health -= this.addMods(2);
  }

  swooce() {
    _toast.health -= this.addMods(3);
  }

  giveItem(item) {
    if (item == "hPotion") {
      if (_toast.health < 100 && _toast.health > 75) {
        _toast.health = 100;
      } else {
        _toast.health += _potion.healAmount;
      }
    } else if (item == "shield" && _toast.pItems.length <= 3) {
      _toast.pItems.push(_shield);
    } else if (item == "armor" && _toast.pItems.length <= 3) {
      _toast.pItems.push(_armor);
    } else if (item == "sword" && _toast.nItems.length <= 3) {
      _toast.nItems.push(_sword)
    } else if (item == "bow" && _toast.nItems.length <= 3) {
      _toast.nItems.push(_bow);
    } else if (item == "bPotion") {
      _toast.pItems = [];
      _toast.nItems = [];
    }
  }

  addMods(damage) {
    let total = damage;
    for (let i in _toast.pItems) {
      total /= _toast.pItems[i].defenseMod;
    }
    for (let i in _toast.nItems) {
      total /= _toast.nItems[i].defenseMod;
    }
    return Math.ceil(total);
  }

  get Toast() {
    return _toast;
  }

  reset() {
    _toast.health = 100;
    _toast.pItems = [];
    _toast.nItems = [];
  }
}