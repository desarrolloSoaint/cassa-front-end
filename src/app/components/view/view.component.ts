import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ViewComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
   }

  ngOnInit(): void {
  }

}
