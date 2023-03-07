import {ReservationDTO} from "../dto/reservationDTO";
import {Reservation} from "../interfaces/reservation";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ReservationDTOMapper{

  fromResToDTO(reservation:Reservation):ReservationDTO{
    return {
      id: reservation.id,
      data_inizio: reservation.data_inizio,
      data_fine: reservation.data_fine,
      confermata: reservation.confermata? 'Sì' : 'No',
      id_utente: reservation.id_utente,
      id_auto: reservation.id_auto
    }
  }
}
