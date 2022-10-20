import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Docentes } from 'src/app/core/models/docentes.model';
import { AdminDocentePopupComponent } from './admin-docente-popup/admin-docente-popup.component';

@Component({
  selector: 'app-admin-docente',
  templateUrl: './admin-docente.component.html',
  styleUrls: ['./admin-docente.component.css']
})
export class AdminDocenteComponent implements OnInit {
  readonly width: string = '800px';
  readonly height: string = '400px'; 
  filterPost= '';
  optionSort: {property: string | null, order: string} = {property: null, order: 'asc'}
  @Input('showSearchControl') showSearchControl: boolean = true;  
  
  constructor( public dialog: MatDialog,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openAdd(){
    const dialogRef = this.dialog.open(AdminDocentePopupComponent,{
      width: this.width,
      height: this.height,        
    });
  
  dialogRef.afterClosed().subscribe(result => {
    // this.obtenerNosotros();
  });
  }

  // openAdd(){

  // }

  clearSearch() {
    this.filterPost= '';
      }

      changeSort(property: string): void {
        const {order} = this.optionSort
        this.optionSort = {
          property,
          order: order == 'asc' ? 'desc': 'asc'
        }
        console.log(this.optionSort)
      }

      openEdit(nosotros: Docentes){
        const dialogRef = this.dialog.open(AdminDocentePopupComponent,{
          width: this.width,
          data: nosotros
  
        });
        
        dialogRef.afterClosed().subscribe(result => {
          // this.obtenerNosotros(); 
        });
        }
        

}
