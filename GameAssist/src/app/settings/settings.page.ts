import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class settingsPage {

  constructor(public toastController: ToastController) {}

    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Your settings have been saved.',
        duration: 2000
      });
      toast.present();
    }

    public form = [
    { val: 'Awesome setting #1', isChecked: true },
    { val: 'Enable statistics', isChecked: true },
    { val: 'Awesome setting #2', isChecked: false },
    { val: 'Awesome setting #3', isChecked: true }
  ];
}
