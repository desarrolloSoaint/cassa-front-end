import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FacturaService } from 'src/app/services/factura/factura.service';
import { Factura } from '../../../core/interfaces/factura';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Factura, private dialogRef: MatDialogRef<EditComponent>, private serviceFactura: FacturaService) { }
  

  ngOnInit(): void {
    console.log(this.data,"EDITAR")
  }

  onNoClick(): void {
    this.dialogRef.close();
   }

}
