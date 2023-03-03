import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CarsService} from "../services/cars.service";
import {Car} from "../car";
import {Location} from '@angular/common';
import {MyTableActionsEnum} from "../table/table.component";


@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit{
  id!:number
  car!:Car;
  cars!:Car[];
  action!:MyTableActionsEnum;

  constructor(private route: ActivatedRoute, private router:Router, private carsService: CarsService, private location:Location) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.action=params['action'];
      this.id = Number.parseInt(params['id']);
    })
    if(this.action===MyTableActionsEnum.EDIT){
      this.carsService.getCarById(this.id).subscribe(car => this.car = car);
    } else {
      this.car = {
        id:this.id,
        marca:'',
        modello:'',
        anno: 0,
        prezzo:'',
        targa:''
      }
    }
  }

  post(car: Car) {
    if(car.marca!=null && car.modello!=null && car.anno!=null && 1900<=car.anno && car.anno<=2023 && car.prezzo!=null && car.targa!=null){
      if(this.action===MyTableActionsEnum.NEW_ROW){
        this.carsService.addCar(car).subscribe(() => this.router.navigate(['cars']));
      } else {
        this.carsService.updateCar(car).subscribe(() => this.router.navigate(['cars']));
      }
    }
  }
}
