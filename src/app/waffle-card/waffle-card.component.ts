import { Component, OnInit, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DOCUMENT} from '@angular/platform-browser';
// import {ShowWaffleComponent} from '../show-waffle/show-waffle.component';
import {ActivatedRoute} from '@angular/router';


export interface DialogData {
  image: string;
  title: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-waffle-card',
  templateUrl: './waffle-card.component.html',
  styleUrls: ['./waffle-card.component.css']
})
export class WaffleCardComponent implements OnInit {

  waffles: any;
  waff:any;
  constructor(private http: HttpClient, public dialog: MatDialog, @Inject(DOCUMENT) private document: Document) { }



  ngOnInit() {

    this.http.get('http://'+this.document.location.hostname+':3000/api/waffles').subscribe((res: any) => {
      console.log(res);
      this.waffles = res;
    });
  }

  openDialog(id : any) : void {

    console.log(id, "clicked");
    var url = 'http://' + this.document.location.hostname + ':3000/api/waffle/' + id;
    this.http.get(url).subscribe((res: any) => {
      // console.log(res);
      this.waff = res;
      // console.log(this.waff);
      const dialogRef = this.dialog.open(ShowWaffleComponent, {
        width: 'auto',
        minWidth: '60%',
        maxWidth: '95%',
        height: 'auto',
        maxHeight: '100%',
        data: {image: this.waff.image, title: this.waff.title, description: this.waff.description, price: this.waff.price, info: this.waff.info}
      });
    });

    // const waffl = this.waffles;
    //
    //
    // for(var i=0; i<waffl.length; i++){
    //   if(waffl[i]._id = id){
    //     this.waff = waffl[i];
    //     break;
    //   }
    // }



  }

}



@Component({
  selector: 'app-show-waffle',
  templateUrl: 'show-waffle.component.html',
  styleUrls: ['./waffle-card.component.css']
})

export class ShowWaffleComponent {

  constructor(public dialogRef: MatDialogRef<ShowWaffleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  // ngOnInit() {
  //
  //   const id = this.route.snapshot.paramMap.get('id');
  //
  //   const url = 'http://127.0.0.1:3000/api/waffle/' + id ;
  //
  //   this.http.get(url).subscribe((res: any) => {
  //     console.log(res);
  //     this.waffle = res;
  //   });
  // }

}
