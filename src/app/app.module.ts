import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

//import {SearchComponent} from './search/search.component';

import {DetailComponent} from './detail/detail.component';

import { RouterModule, Routes } from '@angular/router';

import {RoboFilterPipe} from './pipes/robo-filter.pipe';

import {RatingsComponent} from './shared/ratings.component';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {RoboAssistantService} from "./service/roboAssistant.service";
import {HeaderComponent} from "./header/header.component";

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full'}//,
 // { path: 'detail', component: DetailComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    DetailComponent,
    RoboFilterPipe,
    RatingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RoboAssistantService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
