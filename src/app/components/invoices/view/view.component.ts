import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Factura } from '../../../core/interfaces/factura';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Factura, private dialogRef: MatDialogRef<ViewComponent>) { }

  ngOnInit(): void {
    console.log(this.data,"VER")
  }

  onNoClick(): void {
    this.dialogRef.close();
   }



}
