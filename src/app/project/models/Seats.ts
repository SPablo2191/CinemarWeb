export interface Seat{
    idButaca : number;
    idSala : number;
    fila : number;
    columna : number;
    nombre : string;
    disponible : boolean;
}
export interface seatOfShow{
    seats : any[];
    length : number;
}