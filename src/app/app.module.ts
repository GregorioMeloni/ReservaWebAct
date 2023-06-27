import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RolComponent } from './models/rol/rol.component';
import { FormsModule } from '@angular/forms';
import { InicioRolComponent } from './models/inicio-rol/inicio-rol.component';
import { HomeComponent } from './models/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RolComponent,
    InicioRolComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }