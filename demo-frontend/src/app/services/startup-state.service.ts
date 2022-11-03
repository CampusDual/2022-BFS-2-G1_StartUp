import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StartupState } from '../model/startupState';
import { API_CONFIG } from '../shared/api.config';

@Injectable({
  providedIn: 'root',
})
export class StartupStateService {
  constructor(private http: HttpClient) {}

  public getRangeInvester(): Observable<StartupState[]> {
    return this.http.get<StartupState[]>(`${API_CONFIG.urlBaseStartUpState}`);
  }

  getPage(request): Observable<any> {
    const params = request;
    return this.http.get(`${API_CONFIG.getStartUpStatePage}`, { params });
  }
}
