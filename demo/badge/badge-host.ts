import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[badge-host]',
})
export class BadgeHost {
  constructor(public viewContainerRef: ViewContainerRef) { }
}