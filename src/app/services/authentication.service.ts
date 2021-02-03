import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { BehaviorSubject } from 'rxjs';
const {Storage} = Plugins;
const TOKENKEY ="my_token";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token='';

  constructor(private http: HttpClient) {
    this.loadToken();
   }

   async loadToken() {
     const token = await Storage.get({key: TOKENKEY});
     if(token && token.value) {
       console.log('Set token: ', token.value);
       this.token = token.value;
       this.isAuthenticated.next(true);
     }
     else {
       this.isAuthenticated.next(false);
     }
   }

   login(credentials:{email,password}) {

   }
}
