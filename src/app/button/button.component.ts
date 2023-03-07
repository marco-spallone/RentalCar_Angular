import {Component, Input} from '@angular/core';
import {Reservation} from "../interfaces/reservation";
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {Icon} from "@fortawesome/fontawesome-svg-core";


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

  show(reservation:Reservation){
  }
}
