import { Component, Input } from '@angular/core';
@Component({
  selector: 'panel',
  imports: [],
  templateUrl: './c-panel.html',
  styleUrl: './c-panel.scss',
})
export class CPanel {
  @Input() titulo!: string;
  @Input() numero!: number;
}
