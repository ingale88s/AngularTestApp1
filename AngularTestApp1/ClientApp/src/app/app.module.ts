import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { HandComponent } from './hand/hand.component';
import { SpineComponent } from './spine/spine.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DataService } from './services/data.service';
import { SignalrComponent } from './signalr/signalr.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    HandComponent,
    FetchDataComponent,
    SpineComponent,
    SignalrComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'hand', component: HandComponent },
      { path: 'spine', component: SpineComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'signalr', component: SignalrComponent }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
