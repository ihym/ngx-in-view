import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {InViewModule} from 'ngx-in-view/ngx-in-view';

import {AppComp} from './app';
import {Badge} from './badge/badge';
import {BadgeHost} from './badge/badge-host';

@NgModule({
  imports: [
    BrowserModule,
    InViewModule.forRoot({offset: 100}),
  ],
  declarations: [
    AppComp, Badge, BadgeHost,
  ],
  bootstrap: [AppComp],
  entryComponents: [Badge],
})
export class InViewDemoModule {}
