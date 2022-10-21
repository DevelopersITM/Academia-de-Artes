import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDocenteComponent } from './modules/admin-docente/admin-docente.component';
import { CursosHorariosComponent } from './modules/admin-docente/cursos-horarios/cursos-horarios.component';
import { AdminUsuariosComponent } from './modules/admin-usuarios/admin-usuarios.component';
import { AsignarCursosComponent } from './modules/asignar-cursos/asignar-cursos.component';
import { CursosMatriculadosComponent } from './modules/cursos-matriculados/cursos-matriculados.component';
import { CursosComponent } from './modules/cursos/cursos.component';
import { HomeComponent } from './modules/home/home.component';
import { HorariosComponent } from './modules/horarios/horarios.component';
import { PagosComponent } from './modules/pagos/pagos.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'asignar/cursos', component: AsignarCursosComponent},
  {path: 'admin/usuarios', component: AdminUsuariosComponent},
  {path: 'admin/docente', component: AdminDocenteComponent},
  {path: 'cursos/matriculados', component: CursosMatriculadosComponent},
  {path: 'pagos', component: PagosComponent},
  {path: 'horarios', component: HorariosComponent},
  {path: 'cursos/horarios', component: CursosHorariosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
