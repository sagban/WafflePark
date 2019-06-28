import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {OpenDialogService} from '../open-dialog.service';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _openDialogService: OpenDialogService) { }


  ngOnInit() {
  }


  openDialog():void{
    this._openDialogService.openDialog(LoginComponent);
  }

}
