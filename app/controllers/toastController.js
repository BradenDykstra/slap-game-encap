import toastService from "../services/toastService.js";

let _toastService = new toastService;

function _draw() {
  let healthElement = document.querySelector("#toast-health");
  let toast = _toastService;
  healthElement.textContent = toast.Toast.health.toString();
  if (toast.Toast.health <= 0) {
    document.querySelector("#toast-picture").innerHTML = '<img src="ko.jpg" alt="" width="200px" height="175px" class="rounded">'
  } else {
    document.querySelector("#toast-picture").innerHTML = '<img src="toaster.png" alt="" width="200px" height="175px">'
  }
  let healthBar = document.getElementById("toast-health-bar");
  healthBar.style.width = toast.Toast.health.toString() + "%";
}

export default class ToastController {

  slap() {
    _toastService.slap();
    _draw();
  }

  shinKick() {
    _toastService.shinKick();
    _draw();
  }

  swooce() {
    _toastService.swooce();
    _draw();
  }

  giveItem(item) {
    _toastService.giveItem(item);
    if (item == "bPotion") {
      document.querySelector("#bread-attack-items").innerHTML = "";
      document.querySelector("#toast-defense-items").innerHTML = "";
    }
    if (_toastService.Toast.nItems.length <= 3) {
      if (item == "sword") {
        document.querySelector("#bread-attack-items").innerHTML += "<dd>Sword</dd>";
      } else if (item == "bow") {
        document.querySelector("#bread-attack-items").innerHTML += "<dd>Bow</dd>";
      }
    }
    if (_toastService.Toast.pItems.length <= 3) {
      if (item == "shield") {
        document.querySelector("#toast-defense-items").innerHTML += "<dd>Shield</dd>";
      } else if (item == "armor") {
        document.querySelector("#toast-defense-items").innerHTML += "<dd>Armor</dd>";
      }
    }
    _draw();
  }

  reset() {
    _toastService.reset();
    document.querySelector("#bread-attack-items").innerHTML = "";
    document.querySelector("#toast-defense-items").innerHTML = "";
    _draw();
  }
}

_draw();