
export interface Reservation{
  id:number | null,
  data_inizio:string,
  data_fine:string,
  confermata:boolean,
  id_utente:number,
  id_auto:number
}
