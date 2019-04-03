import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CuinSolutionsComponent } from './cuin-solutions/cuin-solutions.component';
import { MacrosManagerComponent } from './macros-manager/macros-manager.component';
import { BoozyDiceComponent } from './boozy-dice/boozy-dice.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CuinSolutionsComponent,
    MacrosManagerComponent,
    BoozyDiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavbarComponent
  ]
})
export class AppModule { }
