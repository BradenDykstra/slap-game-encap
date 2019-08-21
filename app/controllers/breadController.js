import BreadService from "../services/breadService.js";

let _breadService = new BreadService;

function _draw() {
  let healthElement = document.querySelector("#bread-health");
  let bread = _breadService;
  let healthBar = document.getElementById("bread-health-bar");
  if (bread.Bread.health <= 0) {
    document.querySelector("#bread-picture").innerHTML = '<img src="ko.jpg" alt="" width="200px" height="175px" class="rounded">'
  } else {
    document.querySelector("#bread-picture").innerHTML = '<img src="bread.gif" alt="" width="200px" height="175px">'
  }
  healthElement.textContent = bread.Bread.health.toString();
  healthBar.style.width = bread.Bread.health.toString() + "%";
}

export default class BreadController {
  constructor() {
    _draw();
  }


  slap() {
    _breadService.slap();
    _draw()
  }

  shinKick() {
    _breadService.shinKick();
    _draw()
  }

  burn() {
    _breadService.burn();
    _draw()
  }

  giveItem(item) {
    _breadService.giveItem(item);
    if (item == "bPotion") {
      document.querySelector("#toast-attack-items").innerHTML = "";
      document.querySelector("#bread-defense-items").innerHTML = "";
    }
    if (_breadService.Bread.nItems.length <= 3) {
      if (item == "sword") {
        document.querySelector("#toast-attack-items").innerHTML += "<dd>Sword, x1.5 Damage</dd>";
      } else if (item == "bow") {
        document.querySelector("#toast-attack-items").innerHTML += "<dd>Bow, x2 Damage</dd>";
      }
    }
    if (_breadService.Bread.pItems.length <= 3) {
      if (item == "shield") {
        document.querySelector("#bread-defense-items").innerHTML += "<dd>Shield, x1.5 Defense</dd>";
      } else if (item == "armor") {
        document.querySelector("#bread-defense-items").innerHTML += "<dd>Armor, x2 Defense</dd>";
      }
    }
    _draw()
  }

  reset() {
    _breadService.reset();
    document.querySelector("#toast-attack-items").innerHTML = "";
    document.querySelector("#bread-defense-items").innerHTML = "";
    _draw();
  }

}