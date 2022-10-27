import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { API_CONFIG } from '../shared/api.config';
import { environment } from 'src/environments/environment';
import { AnyPageFilter } from '../model/rest/filter';
import { DataSourceRESTResponse } from '../model/rest/response';
import { CreateContactRequest, EditContactRequest } from '../model/rest/requestInversor';
import { Buffer } from 'buffer';
import { Inversor } from '../model/inversor';

@Injectable({
  providedIn: 'root'
})
export class InversorService {

  constructor(private http: HttpClient) { }

  

  public getInversores(pageFilter: AnyPageFilter): Observable<DataSourceRESTResponse<Inversor[]>> {
    const url = API_CONFIG.getContacts;
    const headers = new HttpHeaders({
      'Content-type': 'application/json; charset=utf-8',
      // Authorization: 'Basic ' + btoa(`${environment.clientName}:${environment.clientSecret}`),
      Authorization: 'Basic ' + Buffer.from(`${environment.clientName}:${environment.clientSecret}`, 'utf8').toString('base64'),
    });
    
    console.log("ESTOY EN GETCONTACTS=",this.http.post<DataSourceRESTResponse<Inversor[]>>(url, pageFilter, { headers }));
    
    return this.http.post<DataSourceRESTResponse<Inversor[]>>(url, pageFilter, { headers });
  }

  public getContact(id: number): Observable<Inversor> {
    const url = API_CONFIG.getContact;
    const headers = new HttpHeaders({
      'Content-type': 'charset=utf-8',
      Authorization: 'Basic ' + Buffer.from(`${environment.clientName}:${environment.clientSecret}`, 'utf8').toString('base64'),
    });
    const params = new HttpParams().set('id', id.toString());
    return this.http.get<Inversor>(url, { params, headers });
  }

  public createContact(contact: Inversor): Observable<any> {
    const url = API_CONFIG.createContact;
    const body: CreateContactRequest = new CreateContactRequest(contact);
    const headers = new HttpHeaders({
      'Content-type': 'application/json; charset=utf-8',
      Authorization: 'Basic ' + Buffer.from(`${environment.clientName}:${environment.clientSecret}`, 'utf8').toString('base64'),
    });
    return this.http.post<Inversor>(url, body, { headers }).pipe(
      catchError(e =>{
        return throwError(()=>e);
      })
    );
  }

  public editContact(contact: Inversor): Observable<any> {
    const url = API_CONFIG.editContact;
    const body: EditContactRequest = new EditContactRequest(contact);
    const headers = new HttpHeaders({
      'Content-type': 'application/json; charset=utf-8',
      Authorization: 'Basic ' + Buffer.from(`${environment.clientName}:${environment.clientSecret}`, 'utf8').toString('base64'),
    });
    return this.http.post<any>(url, body, { headers }).pipe(
      catchError((e:HttpErrorResponse) =>{
        return throwError(()=>e);
      })
    );
  }

  public deleteContact(id: number): Observable<any> {
    const url = API_CONFIG.deleteContact;
    const headers = new HttpHeaders({
      'Content-type': 'charset=utf-8',
      Authorization: 'Basic ' + Buffer.from(`${environment.clientName}:${environment.clientSecret}`, 'utf8').toString('base64'),
    });
    const params = new HttpParams().set('id', id.toString());
    return this.http.delete<any>(url, { params, headers });
  }
}
