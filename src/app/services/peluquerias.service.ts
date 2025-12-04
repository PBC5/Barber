import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PeluqueriasService {
    private apiUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getPeluquerias(): Observable<any[]> {
        const users$ = this.http.get<any[]>(`${this.apiUrl}/usuarios?rol=Peluqueria`);
        const peluquerias$ = this.http.get<any[]>(`${this.apiUrl}/peluquerias`);

        return forkJoin([users$, peluquerias$]).pipe(
            map(([users, peluquerias]) => {
                return users.map(user => {
                    const peluqueriaDetails = peluquerias.find(p => p.usuario_id === user.id);
                    if (peluqueriaDetails) {
                        return {
                            ...user,
                            ...peluqueriaDetails
                        };
                    }
                    return null;
                }).filter(item => item !== null);
            })
        );
    }
}
