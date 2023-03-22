import {Component, Input} from '@angular/core';
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonConfig!: MyButtonConfig;
}

export class MyButtonConfig {

  icon: IconDefinition;
  text: string;
  cssClass: string;

  constructor(icon: IconDefinition, text: string, cssClass: string) {
    this.icon = icon;
    this.text = text;
    this.cssClass = cssClass;
  }

  show(entity: any): boolean {
    return true;
  }
}
