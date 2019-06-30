import { Component, OnInit } from '@angular/core';
import {OpenDialogService} from '../open-dialog.service';
import {LoginComponent} from '../login/login.component';
import {SignupComponent} from '../signup/signup.component';
import {FormSubmitService} from '../form-submit.service';
import {SessionsService} from '../sessions.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  session: boolean = false;
  constructor(private _openDialogService: OpenDialogService,
    private _sessionsService: SessionsService,
    private _formSubmitService: FormSubmitService,) {
    _formSubmitService.getSession.subscribe(value=>{
      this.changeSession(value);
    });
  }

  ngOnInit() {
    this.checkSession();
  }

  openLoginDialog():void{
    this._openDialogService.openDialog(LoginComponent);
  }
  openSignupDialog():void{
    this._openDialogService.openDialog(SignupComponent);
  }

  changeSession(value){
    this.session = value;
  }
  checkSession(){
    this._sessionsService.checkSession().subscribe(res=>{
      this.changeSession(res.data);
    });
  }

}
