export class Response {
    message: string;
    isSuccess: boolean;
    code: number;

    constructor(message: string, isSuccess: boolean, code: number){
        this.message = message;
        this.isSuccess = isSuccess;
        this.code = code;
    }
}