import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { API_CONFIG } from '../shared/api.config';
import { environment } from 'src/environments/environment';
import { AnyPageFilter } from '../model/rest/filter';
import { DataSourceRESTResponse } from '../model/rest/response';
import { CreateStartupRequest, EditStartupRequest } from '../model/rest/requestStartup';
import { Buffer } from 'buffer';
import { Startup } from '../model/startup';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(private http: HttpClient) { }

  

  public getStartups(pageFilter: AnyPageFilter): Observable<DataSourceRESTResponse<Startup[]>> {
    const url = API_CONFIG.getStartupsPage;
    const headers = new HttpHeaders({
      'Content-type': 'application/json; charset=utf-8',
      // Authorization: 'Basic ' + btoa(`${environment.clientName}:${environment.clientSecret}`),
      Authorization: 'Basic ' + Buffer.from(`${environment.clientName}:${environment.clientSecret}`, 'utf8').toString('base64'),
    });
    
    console.log("ESTOY EN GET STARTUPS=",this.http.post<DataSourceRESTResponse<Startup[]>>(url, pageFilter, { headers }));
    
    return this.http.post<DataSourceRESTResponse<Startup[]>>(url, pageFilter, { headers });
  }

  public getStartup(id: number): Observable<Startup> {
    const url = API_CONFIG.getStartup;
    const headers = new HttpHeaders({
      'Content-type': 'charset=utf-8',
      Authorization: 'Basic ' + Buffer.from(`${environment.clientName}:${environment.clientSecret}`, 'utf8').toString('base64'),
    });
    const params = new HttpParams().set('id', id.toString());
    return this.http.get<Startup>(url, { params, headers });
  }

  public createStartup(startup: Startup): Observable<any> {
    const url = API_CONFIG.createStartup;
    const body: CreateStartupRequest = new CreateStartupRequest(startup);
    const headers = new HttpHeaders({
      'Content-type': 'application/json; charset=utf-8',
      Authorization: 'Basic ' + Buffer.from(`${environment.clientName}:${environment.clientSecret}`, 'utf8').toString('base64'),
    });
    return this.http.post<Startup>(url, body, { headers }).pipe(
      catchError(e =>{
        return throwError(()=>e);
      })
    );
  }

  public editStartup(startup: Startup): Observable<any> {
    const url = API_CONFIG.editStartup;
    const body: EditStartupRequest = new EditStartupRequest(startup);
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

  public deleteStartup(id: number): Observable<any> {
    const url = API_CONFIG.deleteStartup;
    const headers = new HttpHeaders({
      'Content-type': 'charset=utf-8',
      Authorization: 'Basic ' + Buffer.from(`${environment.clientName}:${environment.clientSecret}`, 'utf8').toString('base64'),
    });
    const params = new HttpParams().set('id', id.toString());
    return this.http.delete<any>(url, { params, headers });
  }
}
