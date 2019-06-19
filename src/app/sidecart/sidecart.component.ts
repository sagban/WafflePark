import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-sidecart',
  templateUrl: './sidecart.component.html',
  styleUrls: ['./sidecart.component.css']
})
export class SidecartComponent implements OnInit {

  cart: any = [];
  quantity: number;

  constructor(private _cartService: CartService) {

  }

  ngOnInit() {
    this.getCartItem();

  }


  getCartItem():void {
    this.cart = this._cartService.getItems();
  }

  incQuantity(i): void{
    this.cart[i].quantity++;


  }

  decQuantity(i): void{
    if(this.cart[i].quantity > 1){
      this.cart[i].quantity--;

    }
  }

  totalItemPrice(price:number, quantity:number): number{
    return price * quantity;
  }

  totalAmount():number{

    const len = this.cart.length;
    var amt = 0;
    for(var i=0; i<len; i++){
      amt += (this.cart[i]['quantity'] * this.cart[i]['price']);
    }
    return amt;
  }

  totalItems():number{
    const len = this.cart.length;
    var items =0;
    for(var i=0; i<len; i++){
      items += this.cart[i].quantity;
    }
    return items
  }

  removeItem(i):void{
    this.cart.splice(i, 1);
  }


}
