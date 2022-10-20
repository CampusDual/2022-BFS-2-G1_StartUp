import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfessionalProfile } from '../model/ProfessionalProfile';
import { API_CONFIG } from '../shared/api.config';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalProfileService {
  constructor(private http: HttpClient) {}

  public getProfessionalProfile(): Observable<ProfessionalProfile[]> {
    return this.http.get<ProfessionalProfile[]>(
      `${API_CONFIG.urlProfessionalProfile}`
    );
  }
}
