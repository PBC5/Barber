import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CategoriasService } from '../../../services/categorias.service';

@Component({
    selector: 'app-categorias',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './categorias.html',
    styleUrl: './categorias.scss',
})
export class Categorias implements OnInit {
    categorias: any[] = [];

    constructor(private categoriasService: CategoriasService) { }

    ngOnInit() {
        this.categoriasService.getCategorias().subscribe(data => {
            this.categorias = data;
        });
    }
}
