import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {
    private apiUrl = 'http://localhost:8080/api/usuarios';

    constructor(private http: HttpClient) { }

    getUsuarios(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl).pipe(
            catchError(error => {
                console.error('Error fetching usuarios:', error);
                return of([]);
            })
        );
    }
    crearUsuario(usuario: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}`, usuario);
    }
    modificarUsuario(id: number, usuario: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/${id}`, usuario);
    }
    eliminarUsuario(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/${id}`);
    }
}
