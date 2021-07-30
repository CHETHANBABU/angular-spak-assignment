import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TokenValidaterService } from './token-validater.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor(
        private tokenService: TokenValidaterService,
        private router: Router) { }

    /**
     * get user data stored in local storage
     */
    get getStorage(): any {
        if (JSON.parse(localStorage.getItem('result'))) {
            return JSON.parse(localStorage.getItem('result'));
        }
    }

    /**
     * get token stored in local storage
     */
    get getToken(): any {
        if (localStorage.getItem('accessToken')) {
            return localStorage.getItem('accessToken');
        } else {
            return false;
        }
    }
    navigation(path: string): void {
        this.router.navigateByUrl(path);
    }

}
