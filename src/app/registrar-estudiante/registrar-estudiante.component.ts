import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Estudiante } from '../model/estudiante';
import { EstudianteService } from '../service/estudiante.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-estudiante',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './registrar-estudiante.component.html',
  styleUrl: './registrar-estudiante.component.css'
})
export class RegistrarEstudianteComponent {
  estudianteArray: Estudiante[] = [];
  estudianteForm: FormGroup;

  constructor(private estudianteService: EstudianteService) {
    this.estudianteForm = new FormGroup({
      doc_identidad: new FormControl('', []),
      nombres: new FormControl('', []),
      apellidos: new FormControl('', []),
      fec_nacimiento: new FormControl('', []),
      id_genero: new FormControl('', []),
      email: new FormControl('', []),
      direccion: new FormControl('', []),
      num_telefono: new FormControl('', []),
      anio_ingreso: new FormControl('', []),
      id_carrera: new FormControl('', [])
    });
  }

  ngOnInit(): void {
    this.getEstudiantes();
  }

  getEstudiantes(): void {
    this.estudianteService.getEstudiantes().subscribe(
      (result: any) => {
        this.estudianteArray = result.data;
      }, (err: any) => {
        console.log(err);
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Advertencia ...',
          text: 'Ah ocurrido un error!',
        });
      }
    );
  }

  registrarEstudiante(): void {
    console.log('test');
    console.log(this.estudianteForm.value);
    this.estudianteService.registrarEstudiante(this.estudianteForm.value).subscribe(
      (result: any) => {
        console.log(this.estudianteForm.value);
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'registrarEstudiante ...',
          text: 'Se registró exitosamente los datos del estudiante!',
        });
        this.estudianteForm.reset();
        this.getEstudiantes();
      },
      (err: any) => {
        console.log(this.estudianteForm.value);
        console.log(err);
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Advertencia ...',
          text: 'Ah ocurrido un error!',
        });
      }
    );
  }

}
