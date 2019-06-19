import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cart = [];
  constructor() { }

  addItems(item) :void{
    this.cart.push(item);
  }
  getItems(): any{
    return this.cart;
  }
}
