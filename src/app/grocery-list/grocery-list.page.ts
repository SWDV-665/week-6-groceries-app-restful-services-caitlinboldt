import { Component } from '@angular/core';

export interface GroceryProps {
  id: number;
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

  groceries: GroceryProps[] = [
    {id: 1, name: 'Eggs', cost: 4, quantity: 2},
    {id: 2, name: 'Chicken thighs', cost: 12, quantity: 3},
    {id: 3, name: 'Bacon', cost: 5, quantity: 4},
    {id: 4, name: 'Bread', cost: 3, quantity: 1},
    {id: 5, name: 'Cabbage', cost: 1, quantity: 1},
    {id: 6, name: 'Yogurt', cost: 1, quantity: 12}
  ];

  removeGroceryItem(index) {
    if (this.groceries.length > 1) {
      this.groceries.splice(index, 1);
    } else {
      this.groceries = [];
    }
  }
}
