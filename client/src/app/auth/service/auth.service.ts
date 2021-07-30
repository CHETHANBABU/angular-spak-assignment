import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CommonService } from 'src/app/utils/services/common.service';

const register = 'spak/register';
const login = 'spak/login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private commonService: CommonService
  ) { }

  public register(obj: any): Observable<any> {
    return this.http.post(`${register}`, obj).pipe(map((res: any) => res));
  }

  public signOut(): void {
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }

  public login(obj): Observable<any>{
    return this.http.post(`${login}`, obj).pipe(map((res: any) => {
      this.commonService.profile = JSON.stringify(res.data);
    }));
  }
}
