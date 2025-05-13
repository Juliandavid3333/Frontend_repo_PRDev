import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const yaSeAbrio = localStorage.getItem('pestanasAbiertas');
    
    if (!yaSeAbrio) {
      // Abre una nueva pestaña para cada ruta
      window.open(window.location.origin + '/giphy', '_blank'); // Pestaña para Giphy
      window.open(window.location.origin + '/history', '_blank'); // Pestaña para History
      localStorage.setItem('pestanasAbiertas', 'true');  // Marca que ya se abrieron las pestañas
    }
  }
}