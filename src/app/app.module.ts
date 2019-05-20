import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatDialogModule,
  MatNativeDateModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PeopleComponent } from './components/people/people.component';
import { FilmsComponent } from './components/films/films.component';
import { HeaderComponent } from './components/header/header.component';
import { People } from 'src/Services/People';
import { Films } from 'src/Services/Films';
import { PeopleDetailsComponent } from 'src/app/components/people/people-details/people-details.component';
import { FilmsDetailsComponent } from 'src/app/components/films/films-details/films-details.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'home', component: HomeComponent }
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'films', component: FilmsComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PeopleComponent,
    FilmsComponent,
    HeaderComponent,
    PeopleDetailsComponent,
    FilmsDetailsComponent,
  ],
  entryComponents: [PeopleDetailsComponent, FilmsDetailsComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatNativeDateModule

  ],
  exports: [RouterModule],
  providers: [
    People,
    Films
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
