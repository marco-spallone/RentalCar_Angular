import {ReservationDTO} from "../dto/reservationDTO";
import {Reservation} from "../interfaces/reservation";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ReservationDTOMapper {

  fromResToDTO(reservation: Reservation): ReservationDTO {
    let conf!:string|null;
    if(reservation.confirmed===true){
      conf='Sì';
    } else if (reservation.confirmed===false){
      conf='No';
    } else if (reservation.confirmed===null) {
      conf=null;
    }
    return {
      id: reservation.id,
      startDate: reservation.startDate,
      endDate: reservation.endDate,
      confirmed: conf,
      userId: reservation.userId,
      carId: reservation.carId
    }
  }
}
