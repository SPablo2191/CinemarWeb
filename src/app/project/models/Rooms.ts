import { Seat } from "./Seats";

export interface Room{
    idSala : number;
    nombre : string;
    tipoSala : roomType;
    cantidadButacas : number;
    fechaRegistro : Date;
    precio : number;
    butacas : Seat[];

}
export interface roomType{
    idTipoSala : number;
    nombre : string;
    valor : number;
}