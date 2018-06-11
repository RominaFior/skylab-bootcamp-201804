export class User{
    constructor(
        public _id:string,
        public nombre:string,
        public email:string,
        public username:string,
        public contraseña:string,
        public confirmaContraseña:string,
        public categoria:string,
        public descripcion: string,
        public events:string
    ){}
}

