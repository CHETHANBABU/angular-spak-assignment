import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

const register = 'spak/register';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public register(obj: any): Observable<any> {
    return this.http.post(`${register}`, obj);
  }

  public signOut(): void {
    this.router.navigateByUrl('/auth/login');
  }
}
