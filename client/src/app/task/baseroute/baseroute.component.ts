import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baseroute',
  templateUrl: './baseroute.component.html',
  styleUrls: ['./baseroute.component.scss']
})
export class BaserouteComponent implements OnInit {
  navigationList = [
    {
      title: 'Dashboard',
      path: 'spak/dashboard',
      icon: 'las la-home'
    }];
  constructor() { }

  ngOnInit(): void {
  }

}
