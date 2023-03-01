import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Reservation} from "../reservation";
import {ReservationsService} from "../services/reservations.service";
import {MyTableConfig} from "../table/table.component";
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

  constructor(private route:ActivatedRoute, private reservationsService: ReservationsService) {
  }

  ngOnInit() {
    this.tableConfig=reservationsTableConfig;
    this.route.params.subscribe(params => {
      this.id = Number.parseInt(params['id']);
    })
    this.reservationsService.getReservations(this.id).subscribe(reservations => this.reservations = reservations);
  }
}
