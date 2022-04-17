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

  groceries = [];
  errorMessage: string;

  constructor(
    public toastCtrl: ToastController,
    public groceryDataService: GroceriesService,
    public inputDialogService: InputDialogService,
    private socialSharing: SocialSharing
  ) {
    this.loadGroceryItems();
    groceryDataService.dataChanged$.subscribe((dataChanged: boolean) => {
      this.loadGroceryItems();
    });
  }

  loadGroceryItems() {
    this.groceryDataService.getGroceries()
    .subscribe(
      groceries => this.groceries = groceries,
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      error => this.errorMessage = <any>error
    );
  }

  async addGroceryItem() {
    this.inputDialogService.addGroceryItem();
  }

  async editGroceryItem(groceryItem) {
    this.inputDialogService.editGroceryItem(groceryItem);
  }

  async removeGroceryItem(groceryItem) {
    const toast = await this.toastCtrl.create({
      message: `Removing ${groceryItem.name} from the grocery list.`,
      duration: 3000
    });
    toast.present();

    // eslint-disable-next-line no-underscore-dangle
    this.groceryDataService.removeGroceryItem(groceryItem._id);
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
