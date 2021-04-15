import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from './core/auth.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ParquesComponent } from './parques/parques.component';
import { AppRoutingModule } from './app.routing.module';
import { PrincipalparquesComponent } from './principalparques/principalparques.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';



@NgModule({
  declarations: [
    AppComponent,
    ParquesComponent,
    PrincipalparquesComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
