import { MyButtonConfig } from "../button/button.component";

export const addButtonConfig:MyButtonConfig = {
  icon:'',
  text:'Aggiungi',
  cssClass:'btn btn-outline-info'
}
export const editButtonConfig: MyButtonConfig = {
  icon:'<fa name="cog" animation="spin"></fa>',
  text:'Modifica',
  cssClass:'btn btn-outline-warning'
}
export const viewResButtonConfig: MyButtonConfig = {
  icon:'',
  text:'Prenotazioni',
  cssClass:'btn btn-outline-success'
}
export const deleteButtonConfig: MyButtonConfig = {
  icon:'',
  text:'Elimina',
  cssClass:'btn btn-outline-danger'
}
export const prevButtonConfig: MyButtonConfig = {
  icon: '',
  text: '<',
  cssClass: 'mt-3 btn btn-outline-warning'
}
export const nextButtonConfig: MyButtonConfig = {
  icon: '',
  text: '>',
  cssClass: 'mt-3 btn btn-outline-warning'
}
export const approveReservation: MyButtonConfig = {
  icon: '',
  text: 'Approva',
  cssClass: 'mt-3 btn btn-outline-success'
}
export const declineReservation: MyButtonConfig = {
  icon: '',
  text: 'Declina',
  cssClass: 'mt-3 btn btn-outline-danger'
}
