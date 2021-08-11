import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FacturaService } from 'src/app/services/factura/factura.service';
import { Factura } from '../../../core/interfaces/factura';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  titles = {
    button: 'Editar Factura'
  }

  
  factura:any = []
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: Factura, 
    private dialogRef: MatDialogRef<EditComponent>, 
    private serviceFactura: FacturaService) { }
  
  ngOnInit(): void {
    // console.log(this.data,"EDITAR");
    this.getInvoices();
  }

  invoiceForm = new FormGroup({
    nro_factura: new FormControl(''),
    nombre: new FormControl(''),
    precio: new FormControl(''),
    iva: new FormControl(''),
    sub_total: new FormControl(''),
    total: new FormControl(''),
    fecha: new FormControl(''),
    nit: new FormControl('')
  })

  getInvoices(){
    this.serviceFactura.viewFacturas(this.data.id).subscribe(res =>{
      // console.log(res)
      this.factura=res
    })
  }

  editInvoices(){
    if(this.invoiceForm.valid){
      this.serviceFactura.update(this.invoiceForm.value, this.factura.id).subscribe(res =>{
        // console.log(res)
        this.alertSuccess()
        this.dialogRef.close();

      }, err =>{

        this.alertError()
        this.dialogRef.close();

      })
    }else {
      
      this.alertError()
      this.dialogRef.close();

      }
  }

  onNoClick(): void {
    this.dialogRef.close();
   }

   /////////////////Sweet Alert////////////////
  alertSuccess() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: 'Factura Editada con Exito'
    })
  }
  
  alertError() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'error',
      title: 'Error al Editar'
    })
  }

}
