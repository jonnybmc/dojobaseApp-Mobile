import { User } from './../models/user';
import { Observable } from 'rxjs/Rx';
import {Injectable} from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';


@Injectable()

export class AuthService{
    constructor(private http: Http){

    }
    signup(user : User){
        const body = JSON.stringify(user);
        const headers = new Headers({
            'Content-Type' : 'application/json'
        });
        return this.http.post('https://dojobase-deployment.herokuapp.com/user', body, {headers:headers})
            .map((response:Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type' : 'application/json'});
        return this.http.post('https://dojobase-deployment.herokuapp.com/user/signin', body, {headers : headers})
        .map((response:Response) => response.json())
        .catch((error: Response) => {
            return Observable.throw(error.json());
        });
    }

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null
    }

}