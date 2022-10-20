import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDocenteComponent } from './modules/admin-docente/admin-docente.component';
import { AdminUsuariosComponent } from './modules/admin-usuarios/admin-usuarios.component';
import { AsignarCursosComponent } from './modules/asignar-cursos/asignar-cursos.component';
import { CursosComponent } from './modules/cursos/cursos.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'asignar/cursos', component: AsignarCursosComponent},
  {path: 'admin/usuarios', component: AdminUsuariosComponent},
  {path: 'admin/docente', component: AdminDocenteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
