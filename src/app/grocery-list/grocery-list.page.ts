import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

export interface GroceryProps {
  name: string;
  cost: number;
  quantity: number;
}

@Component({
  selector: 'app-grocery-list',
  templateUrl: 'grocery-list.page.html',
  styleUrls: ['grocery-list.page.scss']
})

export class GroceryListPage {

  groceries: GroceryProps[] = [];

  constructor(public toastCtrl: ToastController, public alertController: AlertController) {
  }

  async addGroceryItem() {
    const alert = await this.alertController.create({
      header: 'Add a Grocery Item',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name of grocery item'
        },
        {
          name: 'cost',
          type: 'number',
          min: 0,
          placeholder: 'Cost of grocery item'
        },
        {
          name: 'quantity',
          type: 'number',
          min: 0,
          placeholder: 'Quantity'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Add',
          handler: (data) => {
            this.groceries.push(data);
          }
        }
      ]
    });
    await alert.present();
  }

  async removeGroceryItem(index) {
    const toast = await this.toastCtrl.create({
      message: `Removing ${this.groceries[index].name} from the grocery list.`,
      duration: 3000
    });
    toast.present();

    if (this.groceries.length > 1) {
      this.groceries.splice(index, 1);
    } else {
      this.groceries = [];
    }
  }
}
