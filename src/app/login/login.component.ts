import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {OpenDialogService} from '../open-dialog.service';
import {SignupComponent} from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _openDialogService: OpenDialogService) { }
  LoginForm: any;

  ngOnInit() {
    this.LoginForm = new FormGroup({
    'email' : new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    'password' : new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ])
  });
  }
  get email() { return this.LoginForm.get('email'); }
  get password() { return this.LoginForm.get('password'); }



  onSubmit():void{
    console.log(this.LoginForm.value);
  }

  openSignupDialog():void{
    this._openDialogService.changeValue(1);
    this._openDialogService.closeDialog();
    this._openDialogService.openDialog(SignupComponent);
  }
  onNoClick(): void {
    this._openDialogService.closeDialog();
  }

}

