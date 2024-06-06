import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrarEstudianteComponent } from './registrar-estudiante/registrar-estudiante.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegistrarEstudianteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-sisvita-v1';
}
