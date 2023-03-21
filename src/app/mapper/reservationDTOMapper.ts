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
      startDate: reservation.startDate,
      endDate: reservation.endDate,
      confirmed: reservation.confirmed? 'Sì' : 'No',
      userId: reservation.userId,
      carId: reservation.carId
    }
  }
}
