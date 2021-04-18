import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
 
  message= false;


  generos:any[] = [
    { value: 'Femenino', viewValue: 'Femenino' },
    { value: 'Masculino', viewValue: 'Masculino' },
    { value: 'Intersexual', viewValue: 'Intersexual' },
  ];

  edades:any[] = [
    { value: 'Primera infacia'},
    { value: 'Tercera edad'},
    { value: 'Otro'}
  ];

  dias:any[] = [
    { value: 'Mañana'},
    { value: 'Pasado Mañana'},
    { value: 'Proxima semana'}
  ];

  precondiciones:any[] = [
    { value: 'Rinitis'},
    { value: 'Asma'},
    { value: 'Consumo de tabaco'},
    { value: 'Sinusitis'},
    { value: 'Disnea'},
    { value: 'Diabetes'},
    { value: 'EPOC'},
    { value: 'Cancer'},
    { value: 'Enfermedad cardiovascular'}

  ];

  parques:any[] = [
    { value: 'CAYETANO CAÑIZARES-KENNEDY'},
    
    { value: 'URBANIZACION CIUDAD HAYUELOS ETAPAS II,III, IV Y V - FONTIBON'},
    
    { value: 'URBANIZACIÓN CIUDAD SALITRE SECTOR III SM III-12, SM III-13, SM III-18 - TEUSAQUILLO'},
    
    { value: 'DESARROLLO JULIO FLORES - SUBA'},
    
    { value: 'BONANZA - ENGATIVA'},
    
    { value: 'TABORA - ENGATIVA '},
    
    { value: 'El Tunal - Localidad de Tunjuelito'},
    
  ];
  constructor() { }

  ngOnInit(): void {
   this.message = false;
   console.log("valor de  message", this.message);
  }

  onSubmit(){
    console.log("valor de  message", this.message);
    this.message = true;
  }
}
