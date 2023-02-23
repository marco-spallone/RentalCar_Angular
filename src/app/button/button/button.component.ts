import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonConfig!: MyButtonConfig;
}

export class MyButtonConfig {

  icon: string;
  text: string;
  cssClass: string;

  constructor(icon: string, text: string, cssClass: string) {
    this.icon = icon;
    this.text = text;
    this.cssClass = cssClass;
  }
}
