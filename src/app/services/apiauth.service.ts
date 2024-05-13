import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const httpOption = {
    headers: new  HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})

export class ApiAuthAService {

    url: string = 'https://localhost:7230/api/Usuario/login';

    constructor(private http: HttpClient){

    }

    login(email: string, password: string): Observable<Response>{

        return this.http.post<Response>(this.url,{email,password},httpOption);
    }

}