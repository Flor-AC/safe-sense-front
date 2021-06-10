import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Usuario } from './usuario';

export class Response {
    message: string;
    isSuccess: boolean;
    code: number;
    usuario: Usuario;

    constructor(message: string, isSuccess: boolean, code: number, usuario: Usuario){
        this.message = message;
        this.isSuccess = isSuccess;
        this.code = code;
        this.usuario = usuario;
    }
}