import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/utils/models/user.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: UserModel = new UserModel();
  genderList = ['Male', 'Female'];

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void { }

  selectNavigation(navigation) {
    this.router.navigateByUrl(navigation);
  }

  registerHandler(): void {
    this.authService.register(this.model).subscribe(res => {
      this.router.navigateByUrl('/auth/login');
    });
  }
}
