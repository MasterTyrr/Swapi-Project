import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.css']
})
export class FilmsDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialogRef<any>) { }

  ngOnInit() {
    //console.log(this.data)
  }

}
