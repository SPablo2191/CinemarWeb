export interface Room{
    idSala : number;
    nombre : string;
    tipoSala : roomType;
    
    cantidadButacas : number;
    fechaRegistro : Date;

}
export interface roomType{
    nombre : string;
}