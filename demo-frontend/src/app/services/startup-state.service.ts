import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StartupState } from '../model/startupState';
import { API_CONFIG } from '../shared/api.config';
import { environment } from 'src/environments/environment';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root',
})
export class StartupStateService {
  constructor(private http: HttpClient) {}

  public getStartupState(): Observable<StartupState[]> {
    const url = API_CONFIG.urlBaseStartUpState;
    const headers = new HttpHeaders({
      'Content-type': 'application/json; charset=utf-8',
      // Authorization: 'Basic ' + btoa(`${environment.clientName}:${environment.clientSecret}`),
      Authorization: 'Basic ' + Buffer.from(`${environment.clientName}:${environment.clientSecret}`, 'utf8').toString('base64'),
    });
    return this.http.get<StartupState[]>(url, { headers });
  }
}
