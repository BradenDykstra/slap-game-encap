import BreadController from "./controllers/breadController.js";
import ToastController from "./controllers/toastController.js";



class Fight {
  constructor() {
    this.breadController = new BreadController;
    this.toastController = new ToastController;
  }

  reset() {
    this.breadController.reset();
    this.toastController.reset();
  }
}

window["fight"] = new Fight