import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
  selector: "app-stacked-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./stacked-card.component.html",
  styleUrls: ["./stacked-card.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackedCardComponent {
  @Input() showSecondaryAction: boolean = false;
  @Input() headerText: string = "Header";
  @Input() subheadText: string = "Subhead";
  @Input() subtitleText: string = "Subtitle";
  @Input() titleText: string = "Alerta 1";
  @Input() supportingText: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor";
  @Input() style = "Elevated";
  @Input() layout = "Media & text";
  @Input() imageUrl: string = "";
  @Input() buttonText: string = "Ver más";
  
  @Output() viewMoreClicked = new EventEmitter<void>();

  onViewMore(): void {
    this.viewMoreClicked.emit();
  }
}
