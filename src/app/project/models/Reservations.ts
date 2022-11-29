import { discount } from "./Discounts";
import { Seat } from "./Seats";
import { Show } from "./Shows";

export interface Reservation{
    idReserva: number;
    nroReserva : number;
    funcion : Show;
    descuento : discount;
    fechaRegistro : Date;
    total : number;
}

export interface ReservationDetail{
    idDetalleReserva : number;
    idButaca : Seat;
    subtotal : number;
}