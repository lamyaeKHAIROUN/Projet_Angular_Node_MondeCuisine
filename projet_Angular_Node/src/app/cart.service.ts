import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public user: string = "";
  public isAuthenticated: boolean = false;
 
  constructor(private http: HttpClient, private authService: AuthentificationService) { 
    //this.authService.c1.subscribe(user => this.user = user);
    this.authService.c2.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }

  

   


  
 }
