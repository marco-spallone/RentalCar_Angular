import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Reservation} from "../interfaces/reservation";
import {ReservationsService} from "../services/reservations.service";
import {MyTableActionsEnum, MyTableConfig} from "../table/table.component";
import {reservationsTableConfig} from "../config/table-config";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit{
  tableConfig!:MyTableConfig;
  userId!:number;
  reservations!:Reservation[];

  constructor(private route:ActivatedRoute, private router:Router, private reservationsService: ReservationsService) {
  }

  ngOnInit() {
    this.tableConfig=reservationsTableConfig;
    this.route.params.subscribe(params => {
      this.userId = Number.parseInt(params['id']);
    })
    this.reservationsService.getReservations().subscribe(reservations =>{
      this.reservations = reservations.filter(item => item.id_utente===this.userId);
      console.log(this.reservations);
    });
  }

  action(entity:Reservation, action:MyTableActionsEnum){
    switch (action){
      case MyTableActionsEnum.NEW_ROW:
        this.router.navigate(['addReservation', action, this.userId]);
        break;
      default:
        break;
    }
  }
}
