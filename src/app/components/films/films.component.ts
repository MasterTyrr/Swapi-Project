import { Component, OnInit } from '@angular/core';
import { Films } from 'src/Services/Films';
import {  MatDialog } from '@angular/material';
import { FilmsDetailsComponent } from './films-details/films-details.component';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  filmsList = [];
  film = [];

  constructor(private _filmsService: Films, public dialog: MatDialog) { }

  ngOnInit() {
    this.getFilmsList()
  }

  openDialog(film){
    this.film = film;
    this.dialog.open(FilmsDetailsComponent, {data: this.film});
  }

  getFilmsList(){
    this._filmsService.getAllFilms().subscribe(films => {
      //console.log(films)
      this.filmsList = films.results;
    });
  }

  getFilmsByID(id){
    this._filmsService.getFilmsById(id);
  }

}
