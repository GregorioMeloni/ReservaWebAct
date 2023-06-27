import { Component } from '@angular/core';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss']
})
export class RolComponent {
  id: number=0;
  nombre: string="";
  descripcion: string="";
  color: string="";
}
