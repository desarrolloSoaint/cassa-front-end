import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FacturaService } from 'src/app/services/factura/factura.service';
import { Factura } from '../../../core/interfaces/factura';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: Factura, 
    private dialogRef: MatDialogRef<EditComponent>, 
    private serviceFactura: FacturaService) { }
  
  ngOnInit(): void {
    console.log(this.data,"EDITAR")
  }

  invoiceForm = new FormGroup({
    nro_factura: new FormControl(''),
    nombre: new FormControl(''),
    cantidad: new FormControl(''),
    detalles: new FormControl(''),
    precio: new FormControl(''),
    iva: new FormControl(''),
    sub_total: new FormControl(''),
    total: new FormControl(''),
    fecha: new FormControl(''),
    nit: new FormControl('')
  })

  onNoClick(): void {
    this.dialogRef.close();
   }

}
