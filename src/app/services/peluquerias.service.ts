import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, catchError, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PeluqueriasService {
    private apiUrl = 'http://localhost:8080/api/peluquerias';

    constructor(private http: HttpClient) { }

    getPeluquerias(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}`);
    }
    crearPeluqueria(peluqueria: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}`, peluqueria);
    }
    modificarPeluqueria(id: number, peluqueria: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/${id}`, peluqueria);
    }
    eliminarPeluqueria(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/${id}`);
    }
}
