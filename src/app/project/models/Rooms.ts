import { Seat } from "./Seats";

export interface Room{
    idSala : number;
    nombre : string;
    tipoSala : roomType;
    cantidadButacas : number;
    fechaRegistro : Date;
    precio : number;
    butacas : Seat[];
    estado : boolean;
}
export interface roomType{
    idTipoSala : number;
    nombre : string;
    valor : number;
}