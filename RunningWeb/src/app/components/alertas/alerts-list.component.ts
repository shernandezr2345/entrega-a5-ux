import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavigationRailComponent } from '../navegacion/navigation-rail.component';
import { StackedCardComponent } from '../compartido/stacked-card.component';

interface AlertData {
  id: number;
  titleText: string;
  subtitleText: string;
  supportingText: string;
  imageUrl?: string;
  badge?: string;
}

@Component({
  selector: "app-alerts-list",
  standalone: true,
  imports: [CommonModule, NavigationRailComponent, StackedCardComponent],
  templateUrl: "./alerts-list.component.html",
  styleUrls: ["./alerts-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertsListComponent {

  constructor(private router: Router) {}

  alerts: AlertData[] = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    titleText: `Alerta ${i + 1}`,
    subtitleText: 'Subtitle',
    supportingText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }));

  trackByAlertId(index: number, alert: AlertData): number {
    return alert.id;
  }

  onNavItemSelected(item: string): void {
    console.log('Navegando a:', item);
  }

  onCardViewMore(alertId: number): void {
    console.log('Ver más alerta:', alertId);
  }

  onCrearAlerta(): void {
    this.router.navigate(['/crear-alerta']);
  }
}
