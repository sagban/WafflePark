import { Component, OnInit } from '@angular/core';
import {OpenDialogService} from '../open-dialog.service';
import {LoginComponent} from '../login/login.component';
import {SignupComponent} from '../signup/signup.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private _openDialogService: OpenDialogService) { }

  ngOnInit() {
  }

  openLoginDialog():void{
    this._openDialogService.openDialog(LoginComponent);
  }
  openSignupDialog():void{
    this._openDialogService.openDialog(SignupComponent);
  }

}
