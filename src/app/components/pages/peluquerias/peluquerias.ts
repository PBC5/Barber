import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PeluqueriasService } from '../../../services/peluquerias.service';
import { Peluqueria } from '../../../interfaces/PeluqueriaInterface';

@Component({
  selector: 'app-peluquerias',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './peluquerias.html',
  styleUrl: './peluquerias.scss',
})
export class Peluquerias implements OnInit {
  peluquerias: Peluqueria[] = [];

  constructor(private peluqueriasService: PeluqueriasService) { }

  ngOnInit() {
    this.peluqueriasService.getPeluquerias().subscribe((data: Peluqueria[]) => {
      this.peluquerias = data;
    });
  }
}
