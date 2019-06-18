import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ShowWaffleComponent } from './show-waffle/show-waffle.component';
import {WaffleCardComponent} from './waffle-card/waffle-card.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent }
  // { path: 'detail/:id', component: ShowWaffleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
