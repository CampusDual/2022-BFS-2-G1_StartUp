import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrepreneur } from '../model/entrepreneur';
import { API_CONFIG } from '../shared/api.config';

@Injectable({
  providedIn: 'root',
})
export class EntrepreneureService {
  constructor(private http: HttpClient) {}

  public getEntrepreneurs(): Observable<Entrepreneur[]> {
    return this.http.get<Entrepreneur[]>(`${API_CONFIG.getEntrepreneurs}`);
  }

  public create(entrepreneur: any): Observable<any> {
    return this.http.post(
      `${API_CONFIG.urlBaseEntrepreneurs}`,
      JSON.stringify(entrepreneur)
    );
  }

  public find(id: number): Observable<any> {
    return this.http.get<Entrepreneur>(
      `${API_CONFIG.urlBaseEntrepreneurs}` + id
    );
  }

  update(id: number, entrepreneur: Entrepreneur): Observable<any> {
    return this.http.put(
      `${API_CONFIG.urlBaseEntrepreneurs}` + id,
      JSON.stringify(entrepreneur)
    );
  }

  delete(id: number) {
    return this.http.delete(`${API_CONFIG.urlBaseEntrepreneurs}` + id);
  }
}
