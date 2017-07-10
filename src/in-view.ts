import { Directive, Input, ChangeDetectorRef, ElementRef } from '@angular/core';
import { uniqueId } from './util';
import { InViewConfigurable } from './config/config';
import { InViewConfig } from './config/config';

var inView = require('in-view');

@Directive({
  selector: '[inView]',
  host: {
    '[id]': 'uid',
  },
  exportAs: 'inView',
})
@InViewConfigurable()
export class InView {

  @Input() enter: Function;
  @Input() exit: Function;
  @Input() enterOnce: Function;
  @Input() exitOnce: Function;

  private uid = uniqueId();

  constructor(private config: InViewConfig,
              private element: ElementRef,
              private cd: ChangeDetectorRef) {
    this.invOnConfigChanges();
  }

  ngAfterViewInit() {
    const inv = inView(`#${this.uid}`);
    if (this.enter) {
      inv.on('enter', (el) => {
        this.enter(el);
        this.cd.detectChanges();
      });
    }
    if (this.exit) {
      inv.on('exit', (el) => {
        this.exit(el);
        this.cd.detectChanges();
      });
    }
    if (this.enterOnce) {
      inv.once('enter', (el) => {
        this.enterOnce(el);
        this.cd.detectChanges();
      });
    }
    if (this.exitOnce) {
      inv.once('exit', (el) => {
        this.exitOnce(el);
        this.cd.detectChanges();
      });
    }
  }

  is() {
    return inView.is(this.element.nativeElement);
  }

  private invOnConfigChanges() {
    inView.offset(this.config.get('offset'));
    inView.threshold(this.config.get('threshold'));
    inView.test(this.config.get('test'));
  }

};
