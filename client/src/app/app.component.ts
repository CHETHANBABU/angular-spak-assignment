import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BusyIndicatorService } from './utils/services/busy-indicator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'client';
  public isBusy: boolean;
  private loaderSubscription: Subscription;
  constructor(
    private loaderService: BusyIndicatorService,
  ) {}

  ngOnInit(): void {
    this.loaderSubscription = this.loaderService.getStatus().subscribe(status => setTimeout(() => {
      (this.isBusy = status);
    }));
  }

  ngOnDestroy(): void {
    this.loaderSubscription.unsubscribe();
  }
}
