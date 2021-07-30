import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  routePaths: any = new Array<any>();
  defaultProfilePic: string;
  userProfile: any;
  userName: any;
  @Input()
  public set routeList(v: any[]) {
    this.routePaths = v;
  }
  public get routeList(): any[] {
    return this.routePaths;
  }

  public status: boolean;
  activeIndex: number = null;
  constructor(
    private router: Router,
    private auth: AuthService,
    private commonService: CommonService,
  ) {
    this.userProfile = this.commonService.getStorage;
    this.userName = this.userProfile.firstName;
    this.defaultProfilePic = `../../../../assets/profile-images/${this.userProfile.gender.toLowerCase()}.svg`;
  }

  ngOnInit(): void {
  }

  // active status and n=router navigation
  selecteByRoute(navigation, index) {
    this.activeIndex = index;
    this.router.navigate([`/${navigation.path}`]);
  }

  logout() {
    this.auth.signOut();
  }

}
