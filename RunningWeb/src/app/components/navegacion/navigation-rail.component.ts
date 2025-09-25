import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface NavItem {
  label: string;
  selected: boolean;
  route: string;
  badge?: string;
}

@Component({
  selector: "app-navigation-rail",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./navigation-rail.component.html",
  styleUrls: ["./navigation-rail.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationRailComponent {
  @Input() showMenu: boolean = false;
  @Input() showFab: boolean = false;
  @Input() alignment = "Top";
  @Input() navItems = "6";

  @Output() navItemSelected = new EventEmitter<string>();

  navItemsList: NavItem[] = [
    { label: 'Home', selected: false, route: '/home' },
    { label: 'Carreras', selected: false, route: '/carreras' },
    { label: 'Alertas', selected: true, route: '/alerts' },
    { label: 'Historial', selected: false, route: '/historial' },
    { label: 'Metas', selected: false, route: '/metas' },
    { label: 'Retos', selected: false, route: '/retos' },
    { label: 'Perfil', selected: false, route: '/perfil' }
  ];

  constructor(private router: Router) {}

  onNavItemClick(index: number): void {
    this.navItemsList.forEach((item, i) => {
      item.selected = i === index;
    });
    
    const selectedItem = this.navItemsList[index];
    this.navItemSelected.emit(selectedItem.label);
    
    // Navegar automáticamente a la ruta
    this.router.navigate([selectedItem.route]);
  }
}
