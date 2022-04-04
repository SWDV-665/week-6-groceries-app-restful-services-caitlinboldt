import { Injectable } from '@angular/core';

export interface GroceryProps {
  name: string;
  cost: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})

export class GroceriesService {

  groceries: GroceryProps[] = [];

  constructor() { }

  getGroceries() {
    return this.groceries;
  }

  addGroceryItem(data) {
    this.groceries.push(data);
  }

  editGroceryItem(index, data) {
    this.groceries[index] = data;
  }

  removeGroceryItem(index) {
    if (this.groceries.length > 1) {
      this.groceries.splice(index, 1);
    } else {
      this.groceries = [];
    }
  }
}
