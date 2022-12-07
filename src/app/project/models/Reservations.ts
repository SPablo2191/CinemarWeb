import { Discount } from "./Discounts";
import { Seat } from "./Seats";
import { Show } from "./Shows";

export interface Reservation{
    idReserva: number;
    funcion : Show;
    idUsuario: number;
    descuento : Discount;
    fechaRegistro : Date;
    total : number;
    seats : Seat[]
}

export interface ReservationDetail{
    idDetalleReserva : number;
    idButaca : Seat;
    subtotal : number;
}