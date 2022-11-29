export interface Room{
    idSala : number;
    nombre : string;
    tipoSala : roomType;
    cantidadButacas : number;
    fechaRegistro : Date;
    precio : number;

}
export interface roomType{
    nombre : string;
}