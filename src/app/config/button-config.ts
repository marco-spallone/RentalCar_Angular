import { MyButtonConfig } from "../button/button.component";
import {Reservation} from "../interfaces/reservation";

export const addButtonConfig:MyButtonConfig = {
  icon:'',
  text:'Aggiungi',
  cssClass:'btn btn-outline-info',
  show(reservation: Reservation) {
  }
}
export const editButtonConfig: MyButtonConfig = {
  icon:'<fa name="cog" animation="spin"></fa>',
  text:'Modifica',
  cssClass:'btn btn-outline-warning',
  show(reservation: Reservation) {
  }
}
export const viewResButtonConfig: MyButtonConfig = {
  icon:'',
  text:'Prenotazioni',
  cssClass:'btn btn-outline-success',
  show(reservation: Reservation) {
  }
}
export const deleteButtonConfig: MyButtonConfig = {
  icon:'',
  text:'Elimina',
  cssClass:'btn btn-outline-danger',
  show(reservation: Reservation) {
  }
}
export const prevButtonConfig: MyButtonConfig = {
  icon: '',
  text: '<',
  cssClass: 'mt-3 btn btn-outline-warning',
  show(reservation: Reservation) {
  }
}
export const nextButtonConfig: MyButtonConfig = {
  icon: '',
  text: '>',
  cssClass: 'mt-3 btn btn-outline-warning',
  show(reservation: Reservation) {
  }
}
export const approveReservation: MyButtonConfig = {
  icon: '',
  text: 'Approva',
  cssClass: 'mt-3 btn btn-outline-success',
  show(reservation: Reservation) {
    if(!reservation.confermata){
      this.cssClass='hidden';
    }
  }
}
export const declineReservation: MyButtonConfig = {
  icon: '',
  text: 'Declina',
  cssClass: 'mt-3 btn btn-outline-danger',
  show(reservation: Reservation) {
    if(!reservation.confermata){
      this.cssClass='hidden';
    }
  }
}
