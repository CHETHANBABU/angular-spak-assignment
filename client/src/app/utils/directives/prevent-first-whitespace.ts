import { Directive, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[preventfirstwhitespace]'
})
export class PreventfirstwhitespaceDirective {

  constructor() { }

  @HostListener('keypress', ['$event'])
  public onKeyPress(event: any): void {
    if (event.target.value.length === 0 && event.keyCode === 32) {
      event.preventDefault();
    }
  }
}
