import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, catchError, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PeluqueriasService {
    private apiUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getPeluquerias(): Observable<any[]> {
        const users$ = this.http.get<any[]>(`${this.apiUrl}/usuarios?rol=Peluqueria`).pipe(
            catchError(error => {
                console.error('Error fetching usuarios:', error);
                return of([]);
            })
        );
        const peluquerias$ = this.http.get<any[]>(`${this.apiUrl}/peluquerias`).pipe(
            catchError(error => {
                console.error('Error fetching peluquerias:', error);
                return of([]);
            })
        );

        return forkJoin([users$, peluquerias$]).pipe(
            map(([users, peluquerias]) => {
                // Si no hay datos en peluquerias, devolver solo los usuarios
                if (peluquerias.length === 0) {
                    return users;
                }

                // Si hay datos en peluquerias, hacer el merge
                const merged = users.map(user => {
                    const peluqueriaDetails = peluquerias.find(p => p.usuario_id == user.id);

                    if (peluqueriaDetails) {
                        return {
                            ...user,
                            ...peluqueriaDetails
                        };
                    }
                    // Devolver el usuario incluso si no tiene detalles de peluquería
                    return user;
                }).filter(item => item !== null);

                return merged;
            }),
            catchError(error => {
                console.error('Error in getPeluquerias:', error);
                return of([]);
            })
        );
    }
}
