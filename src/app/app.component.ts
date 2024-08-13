import { CommonModule, NgClass, NgFor, NgIf, NgStyle, NgSwitch } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface ArreglitoItem {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterOutlet, NgStyle, NgClass, NgIf, NgFor, NgSwitch, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular0';
  condition = true;
  selectedOption = 'tres';
  options = ['uno', 'dos', 'tres'];
  arreglito: ArreglitoItem[] = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
    { id: 3, name: 'item3' },
    { id: 4, name: 'item4' },
  ];

  trackByFn = (item: any) => {
    return item.id;
  };
}
