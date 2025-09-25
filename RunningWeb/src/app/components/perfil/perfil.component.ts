import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationRailComponent } from '../navegacion/navigation-rail.component';

@Component({
  selector: "app-perfil",
  standalone: true,
  imports: [CommonModule, FormsModule, NavigationRailComponent],
  templateUrl: "./perfil.component.html",
  styleUrls: ["./perfil.component.css"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PerfilComponent {
  
  constructor(private router: Router) {}

  // Form data
  nombre = '';
  apellido = '';
  direccion = '';
  correoElectronico = '';
  telefono = '';
  sexo = 'Femenino';
  marcaPersonal = '';
  estatura = '';
  nombreEntrenador = '';
  peso = '';
  nivel = 'Novato';

  onNavItemSelected(item: string): void {
    console.log('Navegando a:', item);
  }

  onGuardar(): void {
    console.log('Guardando perfil:', {
      nombre: this.nombre,
      apellido: this.apellido,
      direccion: this.direccion,
      correo: this.correoElectronico,
      telefono: this.telefono,
      sexo: this.sexo,
      marcaPersonal: this.marcaPersonal,
      estatura: this.estatura,
      nombreEntrenador: this.nombreEntrenador,
      peso: this.peso,
      nivel: this.nivel
    });
    
    // Puedes navegar a otra página si es necesario
    // this.router.navigate(['/some-route']);
  }
}
