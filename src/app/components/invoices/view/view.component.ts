import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Factura } from '../../../core/interfaces/factura';
import { FacturaService } from 'src/app/services/factura/factura.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  factura: any = [];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Factura,
    private dialogRef: MatDialogRef<ViewComponent>,
    public serviceFactura: FacturaService) { }

  ngOnInit(): void {
    // console.log(this.data, "VER");
    this.viewInvoices();
  }

  viewInvoices() {
    this.serviceFactura.viewFacturas(this.data.id).subscribe(res => {
      this.factura = res;
      // console.log(this.factura);
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
