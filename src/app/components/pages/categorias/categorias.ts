import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CategoriasService } from '../../../services/categorias.service';
import { Categoria } from '../../../interfaces/CategoriaInterface';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categorias.html',
  styleUrl: './categorias.scss',
})
export class Categorias implements OnInit {
  constructor(private categoriasService: CategoriasService) { }
  categorias: Categoria[] = [];
  CatFiltradas: Categoria[] = [];
  search: string = '';
  ngOnInit() {
    this.categoriasService.getCategorias().subscribe((data: Categoria[]) => {
      this.categorias = data;
      this.CatFiltradas = data;
    });
  }
  Buscar() {
    const texto = this.search.toLowerCase();
    this.CatFiltradas = this.categorias.filter(t =>
      t.nombre.toLowerCase().includes(texto) ||
      t.descripcion.toLowerCase().includes(texto)
    );
  }

}
