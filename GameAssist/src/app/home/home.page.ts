import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) {}

  async presentAlert(msg) {
  const alert = await this.alertController.create({
    header: 'Information:',
    subHeader: 'Sorry!',
    message: msg,
    buttons: ['OK']
  });

  await alert.present();
}

}
