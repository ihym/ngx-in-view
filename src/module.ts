import { NgModule, ModuleWithProviders } from '@angular/core';
import { InView } from './in-view';
import { InViewConfig, INV_CONFIG } from './config/config';
import { IInViewConfig } from './config/config.interface';
import { Enter, Exit, EnterOnce, ExitOnce } from './output';

export {IInViewConfig} from './config/config.interface';
export {InViewConfig} from './config/config';

const DIRECTIVES = [
  InView,
  Enter,
  Exit,
  EnterOnce,
  ExitOnce,
];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
})
export class InViewModule {
  static forRoot(config: IInViewConfig = {}): ModuleWithProviders {
    return {
      ngModule: InViewModule,
      providers: [
        { provide: INV_CONFIG, useValue: config },
        InViewConfig,
      ],
   };
 }
}
