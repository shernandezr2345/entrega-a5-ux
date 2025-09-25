import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationRailComponent } from '../navegacion/navigation-rail.component';

@Component({
  selector: "app-crear-meta",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavigationRailComponent],
  templateUrl: "./crear-meta.component.html",
  styleUrls: ["./crear-meta.component.css"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CrearMetaComponent {
  metaForm: FormGroup;

  // Opciones para los dropdowns
  tipoOpciones = [
    { value: 'distancia', label: 'Distancia' },
    { value: 'tiempo', label: 'Tiempo' },
    { value: 'calorias', label: 'Calorías' }
  ];

  objetivoOpciones = [
    { value: '5km', label: '5 Km' },
    { value: '10km', label: '10 Km' },
    { value: '20km', label: '20 Km' },
    { value: '42km', label: '42 Km' }
  ];

  duracionOpciones = [
    { value: 'diario', label: 'Diario' },
    { value: 'semanal', label: 'Semanal' },
    { value: 'mensual', label: 'Mensual' }
  ];

  alarmaOpciones = [
    { value: 'cancion1', label: 'Mi Canción favorita' },
    { value: 'cancion2', label: 'Energetic Beat' },
    { value: 'cancion3', label: 'Morning Motivation' }
  ];

  condicionOpciones = [
    { value: '5km', label: 'Cada 5 Km' },
    { value: '10km', label: 'Cada 10 Km' },
    { value: '1km', label: 'Cada 1 Km' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.metaForm = this.fb.group({
      meta: ['Mi meta personal semanal', Validators.required],
      tipo: ['distancia', Validators.required],
      objetivo: ['20km', Validators.required],
      duracion: ['semanal', Validators.required],
      alarmaVinculada: ['cancion1', Validators.required],
      condicionDisparo: ['5km', Validators.required]
    });
  }

  onNavItemSelected(item: string): void {
    console.log('Navegando a:', item);
  }

  onGuardar(): void {
    if (this.metaForm.valid) {
      console.log('Meta creada:', this.metaForm.value);
      // Aquí iría la lógica para guardar la meta
      
      // Navegar de vuelta a la página de metas
      this.router.navigate(['/metas']);
    }
  }
}
