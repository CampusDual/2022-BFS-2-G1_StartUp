import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entrepreneur } from '../model/entrepreneur';

@Injectable({
  providedIn: 'root',
})
export class EntrepreneureService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}
  public getEntrepreneurs(): Observable<Entrepreneur[]> {
    return this.http.get<Entrepreneur[]>(`${this.apiServerUrl}/entrepreneur`);
  }
  public addEntrepreneurs(
    entrepreneur: Entrepreneur
  ): Observable<Entrepreneur> {
    return this.http.post<any>(
      `${this.apiServerUrl}/entrepreneur`,
      entrepreneur
    );
  }
  getData() {
    return this.http.get('https://picsum.photos/v2/list').pipe(
      map((list: Array<any>) => {
        return list.map((listItem) => {
          return {
            ...listItem,
            shown: false,
          };
        });
      })
    );
  }
}
