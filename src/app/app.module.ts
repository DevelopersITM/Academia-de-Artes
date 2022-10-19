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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarNavComponent,
    FooterComponent,
    CursosComponent,
    AdminCursosPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
