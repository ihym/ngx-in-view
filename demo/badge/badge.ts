import { Component, Input, ChangeDetectionStrategy, ViewChild } from '@angular/core';

export interface BadgeComponent {
  xPos: number;
  yPos: number;
}

@Component({
  selector: 'badge',
  templateUrl: 'badge.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Badge implements BadgeComponent {

  @Input() xPos: number;
  @Input() yPos: number;
  @Input() width: number = 30;
  @Input() height: number = 30;

  inView = false;

  enter() {
    this.inView = true;
    this.width *= 1.5;
    this.height *= 1.5;
  }

  exit() {
    this.inView = false;
    this.width /= 1.5;
    this.height /= 1.5;
  }

}
