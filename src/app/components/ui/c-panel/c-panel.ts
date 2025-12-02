import { Component } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
@Component({
  selector: 'panel',
  imports: [],
  templateUrl: './c-panel.html',
  styleUrl: './c-panel.scss',
})
export class CPanel {
  titulo!: String;
  numero$: Observable<number> = EMPTY;

}
