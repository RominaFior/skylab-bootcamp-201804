import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable()
export class UserService{
    public url: string;

    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    singup(){
        return 'Hola mundo desde el servicio';
    }
}