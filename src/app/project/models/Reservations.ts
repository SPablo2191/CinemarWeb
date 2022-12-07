import { discount } from "./Discounts";
import { Seat } from "./Seats";
import { Show } from "./Shows";

export interface Reservation{
    idReserva: number;
    funcion : Show;
    idUsuario: number;
    descuento : discount;
    fechaRegistro : Date;
    total : number;
    seats : Seat[]
}

export interface ReservationDetail{
    idDetalleReserva : number;
    idButaca : Seat;
    subtotal : number;
}