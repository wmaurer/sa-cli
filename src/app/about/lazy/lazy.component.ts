import { CommonModule } from "@angular/common";
import { Component } from "../../standalone-shim";

@Component({
  standalone: true,
  selector: 'app-lazy',
  imports: [ CommonModule ],
  template: `<h2 *ngIf="visible">{{ title }}</h2>`
})
export class LazyComponent {
  title = 'Standalone Demo';
  visible = true;
}
