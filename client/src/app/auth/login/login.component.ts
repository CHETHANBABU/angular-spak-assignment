import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {}

  selectNavigation(navigation) {
    this.router.navigateByUrl(navigation);
  }

  loginHandler(): void {
    this.authService.login(this.model).subscribe(res => {
      this.router.navigateByUrl('/spak/dashboard');
    });
  }
}
