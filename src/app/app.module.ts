import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './modules/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SideBarNavComponent } from './shared/components/side-bar-nav/side-bar-nav.component';
import { CursosComponent } from './modules/cursos/cursos.component';
import { AdminCursosPopupComponent } from './modules/cursos/cursos-popup/admin-cursos-popup.component';
import { AsignarCursosComponent } from './modules/asignar-cursos/asignar-cursos.component';
import { AdminUsuariosComponent } from './modules/admin-usuarios/admin-usuarios.component';
import { AdminDocenteComponent } from './modules/admin-docente/admin-docente.component';
import { AaignarCursosPopupComponent } from './modules/asignar-cursos/asignar-cursos-popup/aaignar-cursos-popup.component';
import { AdminUsuariosPopupComponent } from './modules/admin-usuarios/admin-usuarios-popup/admin-usuarios-popup.component';
import { AdminDocentePopupComponent } from './modules/admin-docente/admin-docente-popup/admin-docente-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarNavComponent,
    FooterComponent,
    CursosComponent,
    AdminCursosPopupComponent,
    AsignarCursosComponent,
    AdminUsuariosComponent,
    AdminDocenteComponent,
    AaignarCursosPopupComponent,
    AdminUsuariosPopupComponent,
    AdminDocentePopupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
