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
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
],
  providers: [SprintBoardService, NavbarService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
