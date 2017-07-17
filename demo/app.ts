import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {Badge, BadgeComponent} from './badge/badge';
import {BadgeHost} from './badge/badge-host';
import {InViewConfig} from 'ngx-in-view/ngx-in-view';

@Component({
  selector: 'app',
  templateUrl: './app.html',
})
export class AppComp {

  now = process.env.now;

  version = process.env.version;

  @ViewChild(BadgeHost) badgeHost: BadgeHost;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private config: InViewConfig) {}

  ngAfterViewInit() {
    this.getBadges();
  }

  private loadComponent(xPos: string, yPos: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(Badge);
    const viewContainerRef = this.badgeHost.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<BadgeComponent>componentRef.instance).xPos = xPos;
    (<BadgeComponent>componentRef.instance).yPos = yPos;
  }

  private getBadges() {
    setTimeout(() => {
      for (let i = 0; i < 200; i++) {
        this.loadComponent(Math.random() * 100 + '%', Math.random() * 400 + '%');
      }
    });
   }

}
