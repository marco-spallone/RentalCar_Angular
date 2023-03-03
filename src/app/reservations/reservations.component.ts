import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Reservation} from "../reservation";
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
  id!:number;
  reservations!:Reservation[];
  newId!:number;

  constructor(private route:ActivatedRoute, private router:Router, private reservationsService: ReservationsService) {
  }

  ngOnInit() {
    this.tableConfig=reservationsTableConfig;
    this.route.params.subscribe(params => {
      this.id = Number.parseInt(params['id']);
    })
    this.reservationsService.getReservations().subscribe(reservations =>{
      this.reservations = reservations.filter(item => item.id_utente===this.id);
      this.newId = reservations.length+1;
    });
  }

  action(entity:Reservation, action:MyTableActionsEnum){
    switch (action){
      case MyTableActionsEnum.NEW_ROW:
        this.router.navigate(['editReservation', action, this.id, this.newId]);
        break;
      default:
        break;
    }
  }
}
