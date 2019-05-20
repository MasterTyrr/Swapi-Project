import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

  peopleList = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialogRef<any>) { }

  ngOnInit() {
    //console.log(this.data)
  }

}
