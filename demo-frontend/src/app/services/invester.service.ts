import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invester } from '../model/invester';
import { API_CONFIG } from '../shared/api.config';

@Injectable({
  providedIn: 'root',
})
export class InvesterService {
  constructor(private http: HttpClient) {}

  public getInvesters(): Observable<Invester[]> {
    return this.http.get<Invester[]>(`${API_CONFIG.getInvestorsPage}`);
  }

  public create(invester: any): Observable<any> {
    return this.http.post(
      `${API_CONFIG.createInvestor}`,
      JSON.stringify(invester)
    );
  }

  public find(id: number): Observable<any> {
    return this.http.get<Invester>(`${API_CONFIG.getInvestor}` + id);
  }

  update(id: number, invester: Invester): Observable<any> {
    return this.http.put(
      `${API_CONFIG.editInvestor}` + id,
      JSON.stringify(invester)
    );
  }

  delete(id: number):Observable<any> {
    return this.http.delete(`${API_CONFIG.deleteInvestor}` + id);
    
  }

  getPage(request): Observable<any> {
    const params = request;
    return this.http.get(`${API_CONFIG.getInvestorsPage}`, { params });
  }

}
