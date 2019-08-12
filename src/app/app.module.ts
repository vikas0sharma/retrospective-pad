import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprintBoardService } from './services/sprint-board/sprint-board.service';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { NavSideBarComponent } from './nav/nav-side-bar/nav-side-bar.component';
import { NavbarService } from './services/helper/navbar.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavSideBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule
],
  providers: [SprintBoardService, NavbarService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
