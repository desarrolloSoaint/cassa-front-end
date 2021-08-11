import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
import { ViewComponent } from '../view/view.component';
import { FacturaService } from '../../../services/factura/factura.service';
import { Factura } from 'src/app/core/interfaces/factura';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  facturas: Factura[] = [];
  displayedColumns: string[] = ['nro factura', 'nombre', 'precio', 'iva', 'Sub-total', 'total', 'opcion'];
  dataSource = new MatTableDataSource<Factura>();

  constructor(
    public dialog: MatDialog,
    public serviceFactura: FacturaService) { }

  ngOnInit(): void {
    this.getInvoices()
  }

  getInvoices() {
    this.serviceFactura.getFacturas().subscribe(response => {
      response.forEach((f: Factura) => {
        this.facturas.push(f)
        this.dataSource.data = [];
        this.dataSource.data = this.facturas.slice(0)
        // console.log(response);
      })
    }, err => {
      // console.log(err);
    })
  }

  openDialogEdit(id: number) {
    const dialogRef = this.dialog.open(EditComponent, {
      data: {
        id: id
      }
    });
    // console.log(id);
  }

  openDialogView(id: number) {
    const dialogRef = this.dialog.open(ViewComponent, {
      data: {
        id: id
      }
    });
    // console.log(id);
  }

  delete(id: number) {
    // console.log(id);
    this.SwalDelete(id);
  }

  /////////////Sweel Alert //////////////////////

  SwalDelete(id: number) {
    Swal.fire({
      title: 'Esta Seguro de Eliminar la Factura?',
      text: "Usted no podra revertirlo luego",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceFactura.delete(id).subscribe(data => {
          let message = data.message;
          console.log(message);
          Swal.fire(
            'Eliminado!',
            '' + message,
            'success'
          );
          location.reload();
        })
      }
    })
  }
}




