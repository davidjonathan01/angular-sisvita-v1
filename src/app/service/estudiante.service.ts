import { Injectable } from '@angular/core';
import { Estudiante } from '../model/estudiante';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  readonly BASE_URL: string='http://localhost:5000/';

  constructor(private http: HttpClient){}

  getEstudiantes(): Observable <Estudiante[]>{
      return this.http.get<Estudiante[]>(`${this.BASE_URL}/get_estudiantes`);
  }

  registrarEstudiante(form: any){
      return this.http.post(`${this.BASE_URL}/create_estudiante`, form);
  }

  actualizarEstudiante (form: any){
      return this.http.post(`${this.BASE_URL}/update_estudiante`, form);
  }

  eliminarEstudiante (estudiante: Estudiante){
      return this.http.delete(`${this.BASE_URL}/delete`, {body:estudiante});
  }

}
