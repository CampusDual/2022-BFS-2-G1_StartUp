import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Startup } from '../model/startup';
import { API_CONFIG } from '../shared/api.config';

@Injectable({
  providedIn: 'root',
})
export class StartupService {
  constructor(private http: HttpClient) {}

  public getStartups(): Observable<Startup[]> {
    return this.http.get<Startup[]>(`${API_CONFIG.urlBaseStartUp}`);
  }

  public create(startup: any): Observable<any> {
    return this.http.post(
      `${API_CONFIG.urlBaseStartUp}`,
      JSON.stringify(startup)
    );
  }

  public find(id: number): Observable<any> {
    return this.http.get<Startup>(`${API_CONFIG.urlBaseStartUp}` + id);
  }

  update(id: number, startup: Startup): Observable<any> {
    return this.http.put(
      `${API_CONFIG.urlBaseStartUp}` + id,
      JSON.stringify(startup)
    );
  }

  delete(id: number) {
    return this.http.delete(`${API_CONFIG.urlBaseStartUp}` + id);
  }

  getPage(request): Observable<any> {
    const params = request;
    return this.http.get(`${API_CONFIG.getStartupPage}`, { params });
  }

}
