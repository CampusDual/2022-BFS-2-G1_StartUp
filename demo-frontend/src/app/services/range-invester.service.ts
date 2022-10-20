import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RangeInvester } from '../model/rangeInvester';
import { API_CONFIG } from '../shared/api.config';

@Injectable({
  providedIn: 'root',
})
export class RangeInvesterService {
  constructor(private http: HttpClient) {}

  public getRangeInvester(): Observable<RangeInvester[]> {
    return this.http.get<RangeInvester[]>(`${API_CONFIG.urlBaseRange}`);
  }
}
