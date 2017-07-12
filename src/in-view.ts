import { Directive, Output, EventEmitter, ChangeDetectorRef, ElementRef, Optional } from '@angular/core';
import { uniqueId } from './util';
import { InViewConfigurable } from './config/config';
import { InViewConfig } from './config/config';
import { Enter, Exit, EnterOnce, ExitOnce } from './output';

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

  @Output('enter') onEnter = new EventEmitter<any>();
  @Output('exit') onExit = new EventEmitter<any>();
  @Output('enterOnce') onEnterOnce = new EventEmitter<any>();
  @Output('exitOnce') onExitOnce = new EventEmitter<any>();

  private uid = uniqueId();
  private hasEnterHandler;
  private hasExitHandler;
  private hasEnterOnceHandler;
  private hasExitOnceHandler;

  constructor(private config: InViewConfig, private element: ElementRef,
              private cd: ChangeDetectorRef,
              @Optional() enter: Enter,
              @Optional() exit: Exit,
              @Optional() enterOnce: EnterOnce,
              @Optional() exitOnce: ExitOnce) {
    this.hasEnterHandler = !!enter;
    this.hasExitHandler = !!exit;
    this.hasEnterOnceHandler = !!enterOnce;
    this.hasExitOnceHandler = !!exitOnce;
    this.invOnConfigChanges();
  }

  ngAfterViewInit() {
    const inv = inView(`#${this.uid}`);
    if (this.hasEnterHandler) {
      inv.on('enter', () => {
        this.onEnter.emit();
        this.cd.detectChanges();
      });
    }
    if (this.hasExitHandler) {
      inv.on('exit', () => {
        this.onExit.emit();
        this.cd.detectChanges();
      });
    }
    if (this.hasEnterOnceHandler) {
      inv.once('enter', () => {
        this.onEnterOnce.emit();
        this.cd.detectChanges();
      });
    }
    if (this.hasExitOnceHandler) {
      inv.once('exit', () => {
        this.onExitOnce.emit();
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
