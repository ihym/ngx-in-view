import {Injectable, EventEmitter, OpaqueToken, Inject} from '@angular/core';
import {IInViewConfig} from './config.interface';

export const INV_CONFIG = new OpaqueToken('INV_CONFIG');

@Injectable()
export class InViewConfig {

  _emitter = new EventEmitter();

  private values: IInViewConfig = {
		threshold: 0,
		offset: 0,
  };

  constructor(@Inject(INV_CONFIG) config: IInViewConfig = null) {
    this.values = Object.assign({}, this.values, config || {});
  }

  update(config: IInViewConfig) {
    this.values = Object.assign({}, this.values, config || {});
    this._emitter.emit();
  }

  get(key: string) {
    return (<any>this.values)[key];
  }
}

// Intrenal decorator
export function InViewConfigurable(config = {changeDetectorProperty: 'cd'}) {
  return function (constructor: Function) {
    let { ngOnInit, ngOnDestroy } = constructor.prototype;

    constructor.prototype.ngOnInit = function() {
      const changeDetectorRef = this[config.changeDetectorProperty];

      if (!changeDetectorRef || !changeDetectorRef.markForCheck) {
        throw Error(`InViewConfig: invalid ChangeDetectorRef at property "${config.changeDetectorProperty}"`);
      }

      this.invConfigSubscription = this.config._emitter.subscribe(() => {
        if (this.invOnConfigChanges) {
          this.invOnConfigChanges();
        }
        changeDetectorRef.markForCheck();
      });

      if (ngOnInit) {
        ngOnInit.call(this);
      }
    };

    constructor.prototype.ngOnDestroy = function() {
      if (this.invConfigSubscription) {
        this.invConfigSubscription.unsubscribe();
        this.invConfigSubscription = null;
      }

      if (ngOnDestroy) {
        ngOnDestroy.call(this);
      }
    };
  };
};

