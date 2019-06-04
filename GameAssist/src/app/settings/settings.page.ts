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
        duration: 5000,
        color: 'success',
        header: 'INFO',
        animated: true,
        showCloseButton: true
      });
      toast.present();
    }

    public form = [
    { val: 'User statistics', checked: true, color: 'success' },
    { val: 'Send error reports', checked: false, color: 'success' },
    { val: 'Awesome setting #2', checked: false, color: 'success' },
    { val: 'Awesome setting #3', checked: true, color: 'success' }
  ];
}
