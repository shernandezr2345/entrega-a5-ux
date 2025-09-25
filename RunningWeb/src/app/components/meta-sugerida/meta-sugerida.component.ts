import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationRailComponent } from '../navegacion/navigation-rail.component';

@Component({
  selector: "app-meta-sugerida",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavigationRailComponent],
  templateUrl: "./meta-sugerida.component.html",
  styleUrls: ["./meta-sugerida.component.css"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class MetaSugeridaComponent implements OnInit {
  metaForm: FormGroup;
  metaId: number = 1;
  
  // Datos de la meta sugerida según el ID
  metaData = {
    titulo: 'Meta Sugerida: Running 2025',
    objetivo: '20 Km',
    periodo: 'Semanal',
    tipo: 'Distancia',
    alarma: 'Mi Canción'
  };

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.metaForm = this.fb.group({
      objetivo: [this.metaData.objetivo, Validators.required],
      periodo: [this.metaData.periodo, Validators.required],
      tipo: [this.metaData.tipo, Validators.required],
      alarma: [this.metaData.alarma, Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtener el ID de la meta de la URL
    this.route.params.subscribe(params => {
      this.metaId = +params['id'];
      console.log('Meta Sugerida ID:', this.metaId);
    });
  }

  onNavItemSelected(item: string): void {
    console.log('Navegando a:', item);
  }

  onAceptarMeta(): void {
    if (this.metaForm.valid) {
      console.log('Meta aceptada:', this.metaForm.value);
      // Aquí iría la lógica para aceptar/guardar la meta sugerida
      
      // Navegar de vuelta a la página de metas
      this.router.navigate(['/metas']);
    }
  }
}
