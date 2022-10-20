import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Docentes } from 'src/app/core/models/docentes.model';

@Component({
  selector: 'app-admin-docente-popup',
  templateUrl: './admin-docente-popup.component.html',
  styleUrls: ['./admin-docente-popup.component.css']
})
export class AdminDocentePopupComponent implements OnInit {
  formLogin: any; 
  id: number | undefined
  accion ='Agregar';

  constructor(@Inject(MAT_DIALOG_DATA) public docente: Docentes,
  public dialogRef: MatDialogRef<AdminDocentePopupComponent>,
  private fb: FormBuilder,
  public snackBar: MatSnackBar) { 

    this.formLogin = this.fb.group({
      codtipoDocumentoigo: ['', Validators.compose([
        Validators.maxLength(40)
      ])],
      nombre: ['', Validators.compose([
        Validators.maxLength(40)
      ])],
      profesor: ['', Validators.compose([
                        Validators.maxLength(5000)
      ])],
      documento: ['', Validators.compose([
        Validators.maxLength(5000)
      ])],
      telefono: ['', Validators.compose([
        Validators.maxLength(5000)
      ])],
      celular: ['', Validators.compose([
        Validators.maxLength(5000)
      ])],
      email: ['', Validators.compose([
        Validators.maxLength(5000)
      ])],
      direccion: ['', Validators.compose([
        Validators.maxLength(5000)
      ])],
  });

  if(this.docente !== null){
    this.id= docente.id;
    this.formLogin.patchValue({
      tipoDocumento: docente.tipoDocumento,
      nombre: docente.nombre,
      apellido: docente.apellido,
      email: docente.email,
    });
  }

  }

  ngOnInit(): void {
  }

  close() {
  
    this.id= 0;
    this.formLogin.patchValue({
      descripcion: null,
      imagen: null,

    })
}

}
