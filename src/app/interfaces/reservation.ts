export interface Reservation {
  id: number | null,
  startDate: string,
  endDate: string,
  confirmed: boolean | null,
  userId: number,
  carId: number | null
}
