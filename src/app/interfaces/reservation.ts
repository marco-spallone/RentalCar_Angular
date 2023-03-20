import {User} from "./user";
import {Car} from "./car";

export interface Reservation{
  id:number | null,
  startDate:string,
  endDate:string,
  confirmed:boolean,
  user:User,
  car:Car | null
}
