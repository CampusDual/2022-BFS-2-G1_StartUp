import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessSector } from '../model/businessSector';
import { API_CONFIG } from '../shared/api.config';
import { environment } from 'src/environments/environment';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root',
})
export class BusinessSectorService {
  constructor(private http: HttpClient) {}

  public getBusinessSectors(): Observable<BusinessSector[]> {
    const url = API_CONFIG.urlBaseBusinessSector;
    const headers = new HttpHeaders({
      'Content-type': 'application/json; charset=utf-8',
      // Authorization: 'Basic ' + btoa(`${environment.clientName}:${environment.clientSecret}`),
      Authorization: 'Basic ' + Buffer.from(`${environment.clientName}:${environment.clientSecret}`, 'utf8').toString('base64'),
    });
    return this.http.get<BusinessSector[]>(url, { headers });
  }
}
