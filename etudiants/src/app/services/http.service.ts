import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {User} from '../models/user.model'


@Injectable({providedIn : 'root'})
export class HttpService {
    private serverUrl = 'http://localhost:8080/';
    constructor (private http: HttpClient) { }
 
    public getUsers(): Observable<any>{
        return this.http.get(this.serverUrl+'users') ;
    }

    private httpOptions = {
        headers: new HttpHeaders ({
        'Content-Type': 'application/json'
        })
       }

    public createUser(user:User): Observable<User> {
        return this.http.post<User>(this.serverUrl+'users', user, this.httpOptions);
       }    
       
    public suppUser(firstName:string): Observable<any> {
        return this.http.delete<any>(this.serverUrl+'users/'+ firstName, {observe: 'response'});
        }
       
}