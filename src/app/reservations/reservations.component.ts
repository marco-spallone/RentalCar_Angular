import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Reservation} from "../interfaces/reservation";
import {ReservationsService} from "../services/reservations.service";
import {MyTableActionsEnum, MyTableConfig} from "../table/table.component";
import {reservationsTableConfigForAdmin, reservationsTableConfigForCustomer} from "../config/table-config";
import {ReservationDTO} from "../dto/reservationDTO";
import {ReservationDTOMapper} from "../mapper/reservationDTOMapper";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  tableConfig!: MyTableConfig;
  userId!: number;
  reservations!: Reservation[];
  reservationsDTO!: ReservationDTO[];
  isAdmin!: string | null;

  constructor(private route: ActivatedRoute, private router: Router, private reservationsService: ReservationsService, private mapper: ReservationDTOMapper) {
  }

  ngOnInit() {
    this.isAdmin = localStorage.getItem('user');
    if (this.isAdmin === 'true') {
      this.tableConfig = reservationsTableConfigForAdmin;
    } else this.tableConfig = reservationsTableConfigForCustomer;
    this.route.params.subscribe(params => {
      this.userId = Number.parseInt(params['id']);
    })
    this.reservationsService.getReservations().subscribe(reservations => {
      this.reservations = reservations.filter(item => item.id_utente === this.userId);
      this.reservationsDTO = this.reservations.map(res => this.mapper.fromResToDTO(res));
    });
  }

  checkDeletable(reservation: Reservation): boolean {
    let date2 = new Date();
    let date1 = new Date(reservation.data_inizio);
    let diff = Math.abs(date2.getTime() - date1.getTime());
    let days = Math.ceil(diff / (1000 * 3600 * 24));
    if (days < 2) {
      return false;
    } else return true;
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
                this.reservationsService.getReservations().subscribe(res => {
                  this.reservations = res.filter(item => item.id_utente === this.userId);
                  this.reservationsDTO = this.reservations.map(res => this.mapper.fromResToDTO(res));
                });
              });
            } else alert('IMPOSSIBILE CANCELLARE LA PRENOTAZIONE! MANCANO MENO DI 2 GIORNI ALLA DATA DI INIZIO.');
          });
        }
        break;
      case MyTableActionsEnum.APPROVE:
        if(entity.id!=null){
          this.reservationsService.getReservationById(entity.id).subscribe(res => {
            reservation = res;
            reservation.confermata = true;
            entity.confermata='Sì';
          });
        }
        break;
      case MyTableActionsEnum.DECLINE:
        if(entity.id!=null){
          this.reservationsService.getReservationById(entity.id).subscribe(res => {
            reservation = res;
            reservation.confermata = false;
            entity.confermata='No';
          });
        }
        break;
      default:
        break;
    }
  }
}
