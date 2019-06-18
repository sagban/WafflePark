import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserformComponent } from './userform/userform.component';
import {MatCardModule} from '@angular/material/card';
import { WaffleCardComponent, ShowWaffleComponent } from './waffle-card/waffle-card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SidecartComponent } from './sidecart/sidecart.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    WaffleCardComponent,
    MenuComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SidecartComponent,
    ShowWaffleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatSidenavModule,
    MatSliderModule
  ],
  entryComponents:[
    ShowWaffleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
