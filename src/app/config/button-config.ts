import { MyButtonConfig } from "../button/button.component";
import {Reservation} from "../interfaces/reservation";
import {
  faPlus,
  faPen,
  faCalendar,
  faTrash,
  faArrowLeft,
  faArrowRight,
  faCheck, faX
} from '@fortawesome/free-solid-svg-icons';


export const addButtonConfig:MyButtonConfig = {
  icon:faPlus,
  text:'Aggiungi',
  cssClass:'btn btn-outline-info',
  show(reservation: Reservation) {
  }
}
export const editButtonConfig: MyButtonConfig = {
  icon:faPen,
  text:'Modifica',
  cssClass:'btn btn-outline-warning',
  show(reservation: Reservation) {
  }
}
export const viewResButtonConfig: MyButtonConfig = {
  icon:faCalendar,
  text:'Prenotazioni',
  cssClass:'btn btn-outline-success',
  show(reservation: Reservation) {
  }
}
export const deleteButtonConfig: MyButtonConfig = {
  icon:faTrash,
  text:'Elimina',
  cssClass:'btn btn-outline-danger',
  show(reservation: Reservation) {
  }
}
export const prevButtonConfig: MyButtonConfig = {
  icon:faArrowLeft,
  text: '',
  cssClass: 'mt-3 btn btn-outline-warning',
  show(reservation: Reservation) {
  }
}
export const nextButtonConfig: MyButtonConfig = {
  icon:faArrowRight,
  text: '',
  cssClass: 'mt-3 btn btn-outline-warning',
  show(reservation: Reservation) {
  }
}
export const approveReservation: MyButtonConfig = {
  icon:faCheck,
  text: 'Approva',
  cssClass: 'mt-3 btn btn-outline-success',
  show(reservation: Reservation) {
    if(!reservation.confermata){
      this.cssClass='hidden';
    }
  }
}
export const declineReservation: MyButtonConfig = {
  icon:faX,
  text: 'Declina',
  cssClass: 'mt-3 btn btn-outline-danger',
  show(reservation: Reservation) {
    if(!reservation.confermata){
      this.cssClass='hidden';
    }
  }
}
