import { Component, OnInit } from '@angular/core';
import { People } from 'src/Services/People';
import {  MatDialog } from '@angular/material';
import { PeopleDetailsComponent } from './people-details/people-details.component';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peopleList = [];
  person = [];

  constructor(private _peopleservice: People, public dialog: MatDialog) { }

  ngOnInit() {
    this.getPeopleList()
  }

  openDialog(people){
    this.person = people;
    this.dialog.open(PeopleDetailsComponent, { data: this.person });
    //console.log(this.person)
  }

  getPeopleList(){
    this._peopleservice.getAllPeople().subscribe(people => {
      //console.log(people)
      this.peopleList = people.results;
      //console.log(this.peopleList)
    });
    this._peopleservice.getAllPeople2().subscribe(people => {
      //console.log(people)
      // console.log(people2.results.length)
      for (let i = 0; i < people.results.length; i++) {
      this.peopleList.push(people.results[i]);
      }
      //console.log(this.peopleList)
    });
    this._peopleservice.getAllPeople3().subscribe(people => {
      //console.log(people)
      //console.log(people.results.length)
      for (let i = 0; i < people.results.length; i++) {
      this.peopleList.push(people.results[i]);
      }
      //console.log(this.peopleList)
    });
  }

  getPeopleByID(id){
    this._peopleservice.getPeopleById(id);
  }

}
