import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParquesComponent } from './parques/parques.component';
import { PrincipalparquesComponent } from './principalparques/principalparques.component';


const appRoutes:Routes =[
   
    { path: 'parques', component: ParquesComponent },
    { path: 'principalParques', component: PrincipalparquesComponent },
    { path: '**', component: PrincipalparquesComponent }

];
@NgModule({
    imports: [
      // RouterModule.forRoot(appRoutes, {useHash: true})
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }
  
