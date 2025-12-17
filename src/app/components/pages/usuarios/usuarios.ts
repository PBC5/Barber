import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service';
import { Usuario } from '../../../interfaces/UsuarioInterface';

@Component({
    selector: 'app-usuarios',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './usuarios.html',
    styleUrl: './usuarios.scss',
})
export class Usuarios implements OnInit {
    usuarios: Usuario[] = [];

    constructor(private usuariosService: UsuariosService) { }

    ngOnInit() {
        this.usuariosService.getUsuarios().subscribe((data: Usuario[]) => {
            this.usuarios = data;
        });
    }
}
