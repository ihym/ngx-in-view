import { Component, HostBinding, ChangeDetectionStrategy, ElementRef, Renderer } from '@angular/core';

export interface BadgeComponent {
  xPos: string;
  yPos: string;
}

@Component({
  selector: 'badge',
  templateUrl: 'badge.html',
  host: {
    '[class.badge]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Badge implements BadgeComponent {

  @HostBinding('style.left') xPos: string;
  @HostBinding('style.top') yPos: string;

  constructor(private el: ElementRef, private renderer: Renderer) {}

  enter() {
    this.renderer.setElementClass(this.el.nativeElement, 'inView', true);
  }

  exit() {
    this.renderer.setElementClass(this.el.nativeElement, 'inView', false);
  }

}
