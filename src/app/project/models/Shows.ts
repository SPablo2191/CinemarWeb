import { Movie } from "./Movies";
import { Room } from "./Rooms";

export interface Show{
    idFuncion : number;
    sala : Room;
    pelicula : Movie;
    fechaFuncion : Date;
    fechaRegistro : Date;
    cantidadButacasDisponibles : number;
    estado : boolean;
}