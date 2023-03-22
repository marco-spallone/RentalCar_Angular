export interface Reservation {
  id: number | null,
  startDate: string,
  endDate: string,
  confirmed: boolean,
  userId: number,
  carId: number | null
}
