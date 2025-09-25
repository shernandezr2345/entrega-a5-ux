import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavigationRailComponent } from '../navegacion/navigation-rail.component';

@Component({
  selector: "app-metas",
  standalone: true,
  imports: [CommonModule, NavigationRailComponent],
  templateUrl: "./metas.component.html",
  styleUrls: ["./metas.component.css"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class MetasComponent {

  // Datos para meta activa
  metaActiva = {
    titulo: 'Meta Activa: Meta #1',
    kilometros: '16 K.m',
    periodo: '4 Semana',
    imagen: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  };

  // Datos para historial
  historial = [
    {
      id: 1,
      meta: 'Meta 1: Diario',
      avance: '16 Km',
      avanceDetalle: 'Correr 5 km diarios durante 2 semanas',
      estado: 'En proceso'
    },
    {
      id: 2,
      meta: 'Meta 2: Semanal',
      avance: '25 Km completados',
      avanceDetalle: 'Correr 25 km en una semana',
      estado: 'Terminada'
    }
  ];

  // Datos para metas sugeridas
  metasSugeridas = [
    {
      id: 1,
      imagen: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      imagen: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  constructor(private router: Router) {}

  onNavItemSelected(item: string): void {
    console.log('Navegando a:', item);
  }

  onEditarMeta(metaId: number): void {
    console.log('Editando meta:', metaId);
  }

  onMetaSugeridaClick(metaId: number): void {
    this.router.navigate(['/meta-sugerida', metaId]);
  }

  onCrearMeta(): void {
    this.router.navigate(['/crear-meta']);
  }
}
