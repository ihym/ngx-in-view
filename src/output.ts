import {Directive} from '@angular/core';

@Directive({
  selector: '[enter]',
})
export class Enter {}

@Directive({
  selector: '[exit]',
})
export class Exit {}

@Directive({
  selector: '[enterOnce]',
})
export class EnterOnce {}

@Directive({
  selector: '[exitOnce]',
})
export class ExitOnce {}
