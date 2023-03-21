import {MyButtonConfig} from "../button/button.component";
import {
  faPlus,
  faPen,
  faCalendar,
  faTrash,
  faArrowLeft,
  faArrowRight,
  faCheck, faX
} from '@fortawesome/free-solid-svg-icons';


export const addButtonConfig: MyButtonConfig = new MyButtonConfig(faPlus, 'Aggiungi', 'btn btn-outline-info');
export const editButtonConfig: MyButtonConfig = new MyButtonConfig(faPen, 'Modifica', 'btn btn-outline-warning');
export const viewResButtonConfig: MyButtonConfig = new MyButtonConfig(faCalendar, 'Prenotazioni', 'btn btn-outline-success');
export const deleteButtonConfig: MyButtonConfig = new MyButtonConfig(faTrash, 'Elimina', 'btn btn-outline-danger');
export const prevButtonConfig: MyButtonConfig = new MyButtonConfig(faArrowLeft, '', 'mt-3 btn btn-outline-warning');
export const nextButtonConfig: MyButtonConfig = new MyButtonConfig(faArrowRight, '', 'mt-3 btn btn-outline-warning');
export const approveReservation: MyButtonConfig = {
  icon: faCheck,
  text: 'Approva',
  cssClass: 'mt-3 btn btn-outline-success',
  show(entity: any): boolean {
    if (entity.confirmed != null && entity.confirmed==='Sì') {
      return false;
    } else {
      return true;
    }
  }
}
export const declineReservation: MyButtonConfig = {
  icon: faX,
  text: 'Declina',
  cssClass: 'mt-3 btn btn-outline-danger',
  show(entity: any): boolean {
    if (entity.confirmed != null && entity.confirmed==='Sì') {
      return false;
    } else {
      return true;
    }
  }
}
