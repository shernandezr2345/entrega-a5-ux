import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationRailComponent } from '../navegacion/navigation-rail.component';
import { StackedCardComponent } from '../compartido/stacked-card.component';

@Component({
  selector: "app-crear-alerta",
  standalone: true,
  imports: [CommonModule, FormsModule, NavigationRailComponent, StackedCardComponent],
  templateUrl: "./crear-alerta.component.html",
  styleUrls: ["./crear-alerta.component.css"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CrearAlertaComponent {
  
  constructor(private router: Router) {}

  // Form data
  nombreAlerta = '';
  tipoSeleccionado = 'Tiempo';
  valor = '';
  repetirAlerta = true;
  repeticiones = 1;
  plantilla = '';
  activarVibracion = true;
  activarNotificacion = true;
  audioSeleccionado = '';

  
  alertas = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    titleText: `Alerta ${i + 1}`,
    subtitleText: 'Subtitle',
    supportingText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }));

  onNavItemSelected(item: string): void {
    console.log('Navegando a:', item);
  }

  onCardViewMore(alertId: number): void {
    console.log('Ver más alerta:', alertId);
  }

  onGuardar(): void {
    console.log('Guardando alerta:', {
      nombre: this.nombreAlerta,
      tipo: this.tipoSeleccionado,
      valor: this.valor,
      repetir: this.repetirAlerta,
      repeticiones: this.repeticiones,
      plantilla: this.plantilla,
      vibracion: this.activarVibracion,
      notificacion: this.activarNotificacion,
      audio: this.audioSeleccionado
    });
    
    // Navegar de vuelta a la lista de alertas
    this.router.navigate(['/alerts']);
  }

  trackByAlertId(index: number, alert: any): number {
    return alert.id;
  }
}
