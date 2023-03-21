import {User} from "../interfaces/user";
import {Car} from "../interfaces/car";

export interface ReservationDTO{
  id:number | null,
  startDate:string,
  endDate:string,
  confirmed:string|null,
  userId:number|null,
  carId:number | null | undefined
}
