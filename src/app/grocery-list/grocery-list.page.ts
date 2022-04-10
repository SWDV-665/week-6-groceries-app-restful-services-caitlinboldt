import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { GroceriesService } from '../../services/groceries-service/groceries-service.service';
import { InputDialogService } from '../../services/input-dialog-service/input-dialog-service.service';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-grocery-list',
  templateUrl: 'grocery-list.page.html',
  styleUrls: ['grocery-list.page.scss']
})

export class GroceryListPage {

  constructor(
    public toastCtrl: ToastController,
    public groceryDataService: GroceriesService,
    public inputDialogService: InputDialogService,
    private socialSharing: SocialSharing
    ) {
  }

  loadGroceryItems() {
    return this.groceryDataService.getGroceries();
  }

  async addGroceryItem() {
    this.inputDialogService.addGroceryItem();
  }

  async editGroceryItem(index, groceryItem) {
    this.inputDialogService.editGroceryItem(index, groceryItem);
  }

  async removeGroceryItem(index, name) {
    const toast = await this.toastCtrl.create({
      message: `Removing ${name} from the grocery list.`,
      duration: 3000
    });
    toast.present();

    this.groceryDataService.removeGroceryItem(index);
  }

  async shareGroceryItem(name, quantity) {
    const toast = await this.toastCtrl.create({
      message: `Sharing ${name} from the grocery list.`,
      duration: 3000
    });
    toast.present();

    const message = `Grocery Item - Name: ${name} - Quantity: ${quantity}`;
    const subject = 'Shared via Groceries app';
    this.socialSharing.share(message, subject).then(() => {
      console.log('Shared successfully');
    }).catch((error) => {
      console.log('Not shared', error);
    });
  }
}
