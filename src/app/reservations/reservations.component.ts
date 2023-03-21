import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Reservation} from "../interfaces/reservation";
import {ReservationsService} from "../services/reservations.service";
import {MyTableActionsEnum, MyTableConfig} from "../table/table.component";
import {reservationsTableConfigForAdmin, reservationsTableConfigForCustomer} from "../config/table-config";
import {ReservationDTO} from "../dto/reservationDTO";
import {ReservationDTOMapper} from "../mapper/reservationDTOMapper";
import * as moment from 'moment';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  tableConfig!: MyTableConfig;
  userId!: number;
  reservationsDTO!: ReservationDTO[];
  isAdmin!: string | null;

  constructor(private route: ActivatedRoute, private router: Router, private reservationsService: ReservationsService, private mapper: ReservationDTOMapper) {
  }

  ngOnInit() {
    this.isAdmin = localStorage.getItem('admin');
    if (this.isAdmin === 'true') {
      this.tableConfig = reservationsTableConfigForAdmin;
    } else this.tableConfig = reservationsTableConfigForCustomer;
    this.route.params.subscribe(params => {
      this.userId = Number.parseInt(params['userId']);
      this.reservationsService.getReservations(this.userId).subscribe(reservations => {
        this.reservationsDTO = reservations.filter(item => item.userId === this.userId).map(res => this.mapper.fromResToDTO(res));
      });
    })
  }

  checkDeletable(reservation: Reservation): boolean {
    let date2 = moment();
    let date1 = moment(reservation.startDate);
    return date1.diff(date2, 'days') >= 2;
  }

  action(entity: ReservationDTO, action: MyTableActionsEnum) {
    let reservation!:Reservation;
    switch (action) {
      case MyTableActionsEnum.NEW_ROW:
        this.router.navigate(['addReservation', action, this.userId]);
        break;
      case MyTableActionsEnum.EDIT:
        this.router.navigate(['editReservation', action, this.userId, entity.id]);
        break;
      case MyTableActionsEnum.DELETE:
        if(entity.id!=null){
          this.reservationsService.getReservationById(entity.id).subscribe(res => {
            reservation = res;
            if (this.checkDeletable(reservation)) {
              this.reservationsService.deleteReservation(reservation).subscribe(() => {
                this.reservationsService.getReservations(this.userId).subscribe(res => {
                  this.reservationsDTO = res.filter(item => item.userId === this.userId).map(res => this.mapper.fromResToDTO(res));
                });
              });
            } else alert('IMPOSSIBILE CANCELLARE LA PRENOTAZIONE! MANCANO MENO DI 2 GIORNI ALLA DATA DI INIZIO.');
          });
        }
        break;
      case MyTableActionsEnum.APPROVE:
        if(entity.id!=null){
          this.reservationsService.approveReservation(entity.id).subscribe(res => {
            entity.confirmed='Sì';
            this.router.navigate(['reservations', this.userId])
          });
        }
        break;
      case MyTableActionsEnum.DECLINE:
        if(entity.id!=null){
          this.reservationsService.declineReservation(entity.id).subscribe(res => {
            entity.confirmed='No';
            this.router.navigate(['reservations', this.userId])
          });
        }
        break;
      default:
        break;
    }
  }
}
