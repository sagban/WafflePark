import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {FormSubmitService} from '../form-submit.service';

@Component({
  selector: 'app-sidecart',
  templateUrl: './sidecart.component.html',
  styleUrls: ['./sidecart.component.css']
})
export class SidecartComponent implements OnInit {

  cart: any = [];
  quantity: number;
  color = 'primary';
  mode = 'query';
  fetching: boolean = false;
  session: boolean = false;

  constructor(
    private _cartService: CartService,
    private _formSubmitService: FormSubmitService) {

    this.fetching = true;
    this._cartService.getItems().subscribe(res =>{
      this._cartService.cart = res;
      this.showCart();
      this.fetching = false;
    });

     _formSubmitService.getSession.subscribe(value=>{

        this.fetching = true;
        this._cartService.getItems().subscribe(res =>{
          this._cartService.cart = res;
          this.showCart();
          this.fetching = false;
        });

      });
  }

  ngOnInit() {
    this.showCart();
  }

  showCart():void{
    this.cart =  this._cartService.returnItems();
  }

  incQuantity(i): void{
    this.cart[i].quantity++;
    this._cartService.updateItems(this.cart).subscribe(res=>{
      console.log(res);
    });
  }

  decQuantity(i): void{
    if(this.cart[i].quantity > 1){
      this.cart[i].quantity--;
      this._cartService.updateItems(this.cart).subscribe(res=>{
      console.log(res);
    });

    }
  }

  removeItem(i):void{
    this.cart.splice(i, 1);
    this._cartService.updateItems(this.cart).subscribe(res=>{
      console.log(res);
    });
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

  changeSession(value){
    this.session = value;
  }





}
