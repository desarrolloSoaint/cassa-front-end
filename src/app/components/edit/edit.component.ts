import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EditComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
   }


  ngOnInit(): void {
  }

}
