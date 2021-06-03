export class Usuario {
    nombre: string;
    apellido: string;
    telefono: string;
    direccion: string;
    correo: string;
    password: string;

    constructor(nombre: string, apellido: string, telefono: string, direccion: string, correo: string, password: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this. direccion = direccion;
        this. correo = correo;
        this.password = password;
    }
}