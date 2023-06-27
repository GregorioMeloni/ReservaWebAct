import { Component } from '@angular/core';
import { RolComponent } from '../rol/rol.component';

@Component({
  selector: 'app-inicio-rol',
  templateUrl: './inicio-rol.component.html',
  styleUrls: ['./inicio-rol.component.scss']
})
export class InicioRolComponent {
  rolArray: RolComponent[] = [];
  selectedRol: RolComponent = new RolComponent();
  isItemSelected: boolean = false;
  nombreError: string = '';
  descripcionError: string = '';
  colorError: string = '';

  constructor() {
    this.rolArray.push(
      { id: 1, nombre: "Estudiante", descripcion: "5to año", color: "Azul" },
      { id: 2, nombre: "Recursante", descripcion: "4to año", color: "Verde" },
      { id: 3, nombre: "Profesor", descripcion: "3ro año", color: "Rojo" }
    );
  }

  addOrEdit() {
    if (this.validateInputs()) {
      if (this.selectedRol.id === 0) {
        let maxIndex = 0;
        for (const rol of this.rolArray) {
          if (rol.id > maxIndex) {
            maxIndex = rol.id;
          }
        }
        this.selectedRol.id = maxIndex + 1;
        this.rolArray.push(this.selectedRol);
      }
      this.selectedRol = new RolComponent();
      this.isItemSelected = false;
      this.resetErrors();
    }
  }

  openForEdit(rol: RolComponent) {
    this.selectedRol = rol;
    this.isItemSelected = true;
    this.resetErrors();
  }

  delete() {
    if (confirm("¿Estás seguro de querer eliminarlo?")) {
      this.rolArray = this.rolArray.filter(x => x !== this.selectedRol);
      this.selectedRol = new RolComponent();
      this.isItemSelected = false;
      this.resetErrors();
    }
  }

  limpiar() {
    this.selectedRol = new RolComponent();
    this.isItemSelected = false;
    this.resetErrors();
  }

  validateInputs(): boolean {
    let valid = true;
    this.resetErrors();

    if (this.selectedRol.nombre.trim() === '') {
      this.nombreError = 'Este campo es obligatorio';
      valid = false;
    }

    if (this.selectedRol.descripcion.trim() === '') {
      this.descripcionError = 'Este campo es obligatorio';
      valid = false;
    }

    if (this.selectedRol.color.trim() === '') {
      this.colorError = 'Este campo es obligatorio';
      valid = false;
    }

    return valid;
  }

  resetErrors() {
    this.nombreError = '';
    this.descripcionError = '';
    this.colorError = '';
  }
}