import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessSector } from '../model/businessSector';
import { API_CONFIG } from '../shared/api.config';

@Injectable({
  providedIn: 'root',
})
export class BusinessSectorService {
  constructor(private http: HttpClient) {}

  public getRangeInvester(): Observable<BusinessSector[]> {
    return this.http.get<BusinessSector[]>(
      `${API_CONFIG.urlBaseBusinessSector}`
    );
  }
}
