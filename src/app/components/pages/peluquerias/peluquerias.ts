import { Component } from '@angular/core';

@Component({
  selector: 'app-peluquerias',
  imports: [],
  templateUrl: './peluquerias.html',
  styleUrl: './peluquerias.scss',
})
export class Peluquerias {
nombre!: String;
ciudad!: String;
pueblo!: String;
calle!: String;
numero!: number;

}
