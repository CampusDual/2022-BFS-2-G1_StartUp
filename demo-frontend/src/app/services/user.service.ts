import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { API_CONFIG } from '../shared/api.config';
import { environment } from 'src/environments/environment';
import { AnyPageFilter } from '../model/rest/filter';
import { DataSourceRESTResponse } from '../model/rest/response';
//Añadir en el import EditUserRequest cuando se quiera hacer el uso del método de editar
import { CreateUserRequest} from '../model/rest/requestUser';
import { Buffer } from 'buffer';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(private http: HttpClient) { }

  

  public getUsers(pageFilter: AnyPageFilter): Observable<DataSourceRESTResponse<User[]>> {
    const url = API_CONFIG.getUsersPage;
    const headers = new HttpHeaders({
      'Content-type': 'application/json; charset=utf-8',
      // Authorization: 'Basic ' + btoa(`${environment.clientName}:${environment.clientSecret}`),
      Authorization: 'Basic ' + Buffer.from(`${environment.clientName}:${environment.clientSecret}`, 'utf8').toString('base64'),
    });
    
    console.log("ESTOY EN GET USERS",this.http.post<DataSourceRESTResponse<User[]>>(url, pageFilter, { headers }));
    
    return this.http.post<DataSourceRESTResponse<User[]>>(url, pageFilter, { headers });
  }

  public getUser(id: number): Observable<User> {
    const url = API_CONFIG.getUser;
    const headers = new HttpHeaders({
      'Content-type': 'charset=utf-8',
      Authorization: 'Basic ' + Buffer.from(`${environment.clientName}:${environment.clientSecret}`, 'utf8').toString('base64'),
    });
    const params = new HttpParams().set('id', id.toString());
    return this.http.get<User>(url, { params, headers });
  }

  public createUser( user: User): Observable<any> {
    const url = API_CONFIG.createUser;
    const body: CreateUserRequest = new CreateUserRequest(user);
    const headers = new HttpHeaders({
      'Content-type': 'application/json; charset=utf-8',
      Authorization: 'Basic ' + Buffer.from(`${environment.clientName}:${environment.clientSecret}`, 'utf8').toString('base64'),
    });
    return this.http.post<User>(url, body, { headers }).pipe(
      catchError(e =>{
        return throwError(()=>e);
      })
    );
  }
}
