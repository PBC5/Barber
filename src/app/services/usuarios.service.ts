import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {
    private apiUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getUsuarios(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/usuarios?rol=Cliente`).pipe(
            catchError(error => {
                console.error('Error fetching usuarios:', error);
                return of([]);
            })
        );
    }
}
