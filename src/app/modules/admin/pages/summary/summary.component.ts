import { ChangeDetectionStrategy, Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent {

}
