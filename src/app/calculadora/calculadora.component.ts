import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
 
  generos:any[] = [
    { value: 'Femenino', viewValue: 'Femenino' },
    { value: 'Masculino', viewValue: 'Masculino' },
    { value: 'Otro', viewValue: 'Otro' }
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

  parques:any[] = [
    { value: 'Simón Bolívar ( sector central ) - Localidad de Teusaquillo'},
    
    { value: 'Country - Localidad de Usaquén'},
    
    { value: 'Parque Nacional Enrique Olaya Herrera - Localidad de Santa Fé'},
    
    { value: 'Tercer Milenio - Localidad de Santa Fé'},
    
    { value: 'San Cristobal - Localidad de San Cristóbal'},
    
    { value: 'Velódromo deportivo Primera De Mayo - Localidad de San Cristóbal'},
    
    { value: 'El Tunal - Localidad de Tunjuelito'},
    
    { value: 'El Recreo - Localidad de Bosa'},
    
    { value: 'Biblioteca El Tintal - Localidad de Kennedy'},
    
    { value: 'Timiza - Localidad de Kennedy'},
    
    { value: 'Cayetano Cañizares - Localidad de Kennedy'},
    
    { value: 'Zona Franca - Localidad de Fontibón'},
    
    { value: 'Bosque San Carlos - Localidad de Rafael Uribe'},
    
    { value: 'El Lago (Parque de los Novios)- Localidad Barrios Unidos '},
    
    { value: 'PRD - Parque Recreodeportivo - Localidad Barrios Unidos '},
    
    { value: 'Virgilio Barco - Localidad de Teusaquillo'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
