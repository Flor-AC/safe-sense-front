export class Reporte {
    id: number;
    ip: string;
    nombreSensor: string;
    movimiento: string;
    imagen: string;
    fecha: string;
    hora: string;

    constructor(id: number, ip: string, nombreSensor: string, movimiento: string, imagen: string, fecha: string, hora: string){
        this.id = id;
        this.ip = ip;
        this. nombreSensor = nombreSensor;
        this. movimiento = movimiento;
        this.imagen = imagen;
        this.fecha = fecha;
        this.hora = hora;
    }
    
}