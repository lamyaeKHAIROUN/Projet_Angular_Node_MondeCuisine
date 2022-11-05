import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Methods": "GET,POST",   
    "Access-Control-Allow-Headers": "Content-type",  
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  public user:Subject<string> = new BehaviorSubject<string>("");
  public c1 = this.user.asObservable;
  public baseURL: string = "http://localhost:8888/";
  public estConnecter:Subject<boolean> = new BehaviorSubject<boolean>(false);
  public c2=this.estConnecter.asObservable();

  constructor(private http: HttpClient) {}

  getUser() {
      return this.user;
  }
  connect(data: string){
      this.user.next(data);  
      this.estConnecter.next(true);

  }
  disconnect() {
      this.user.next(""); 
      this.estConnecter.next(false);  
  }

  verificationConnexion(identifiants:any): Observable<any> {
      return this.http.post(this.baseURL+'user/connexion', JSON.stringify(identifiants), httpOptions);
  }

   ajouterUtilisateur(user: any) : Observable<any> {
    return this.http.post(this.baseURL+'utilisateurs/inscription', JSON.stringify(user), httpOptions);
 

}
}