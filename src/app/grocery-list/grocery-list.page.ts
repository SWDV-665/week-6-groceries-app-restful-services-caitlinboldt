import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { GroceriesService } from '../../services/groceries-service/groceries-service.service';
import { InputDialogService } from '../../services/input-dialog-service/input-dialog-service.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: 'grocery-list.page.html',
  styleUrls: ['grocery-list.page.scss']
})

export class GroceryListPage {

  constructor(
    public toastCtrl: ToastController,
    public groceryDataService: GroceriesService,
    public inputDialogService: InputDialogService
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
}
