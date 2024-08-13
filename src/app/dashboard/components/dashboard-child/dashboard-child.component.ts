import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dashboard-child',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
  templateUrl: './dashboard-child.component.html',
  styleUrl: './dashboard-child.component.scss',
})
export class DashboardChildComponent implements OnInit, OnChanges {
  @Input() text = '';
  @Output() textChange = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Se actualizo el dashboard-child', changes);
  }

  ngOnInit(): void {
    console.log('Se inicializo el dashboard-child');
  }

  handleClick() {
    this.text = 'dashboard text changed by child';
    this.textChange.emit(this.text);
  }
}
