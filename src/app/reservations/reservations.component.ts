import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Reservation} from "../interfaces/reservation";
import {ReservationsService} from "../services/reservations.service";
import {MyTableActionsEnum, MyTableConfig} from "../table/table.component";
import {reservationsTableConfigForAdmin, reservationsTableConfigForCustomer} from "../config/table-config";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit{
  tableConfig!:MyTableConfig;
  userId!:number;
  reservations!:Reservation[];
  isAdmin!:string | null;

  constructor(private route:ActivatedRoute, private router:Router, private reservationsService: ReservationsService) {
  }

  ngOnInit() {
    this.isAdmin=localStorage.getItem('user');
    if(this.isAdmin==='true'){
      this.tableConfig=reservationsTableConfigForAdmin;
    } else this.tableConfig=reservationsTableConfigForCustomer;
    this.route.params.subscribe(params => {
      this.userId = Number.parseInt(params['id']);
    })
    this.reservationsService.getReservations().subscribe(reservations =>{
      this.reservations = reservations.filter(item => item.id_utente===this.userId);
      console.log(this.reservations);
    });
  }

  checkDeletable(reservation:Reservation): boolean{
    let date2 = new Date();
    let date1 = new Date(reservation.data_inizio);
    let diff = Math.abs(date2.getTime() - date1.getTime());
    let days = Math.ceil(diff / (1000 * 3600 * 24));
    if (days < 2) {
      return false;
    } else return true;
  }

  action(entity:Reservation, action:MyTableActionsEnum){
    switch (action){
      case MyTableActionsEnum.NEW_ROW:
        this.router.navigate(['addReservation', action, this.userId]);
        break;
      case MyTableActionsEnum.EDIT:
        this.router.navigate(['editReservation', action, this.userId, entity.id]);
        break;
      case MyTableActionsEnum.DELETE:
        if(this.checkDeletable(entity)){
          this.reservationsService.deleteReservation(entity).subscribe(() => {
            this.reservationsService.getReservations().subscribe(res => this.reservations = res.filter(item => item.id_utente === this.userId));
          });
        } else alert('IMPOSSIBILE CANCELLARE LA PRENOTAZIONE! MANCANO MENO DI 2 GIORNI ALLA DATA DI INIZIO.');
        break;
      case MyTableActionsEnum.APPROVE:
        entity.confermata=true;
        break;
      case MyTableActionsEnum.DECLINE:
        entity.confermata=false;
        break;
      default:
        break;
    }
  }
}
