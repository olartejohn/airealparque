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
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { PremiumComponent } from './premium/premium.component';



@NgModule({
  declarations: [
    AppComponent,
    ParquesComponent,
    PrincipalparquesComponent,
    CalculadoraComponent,
    PremiumComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
