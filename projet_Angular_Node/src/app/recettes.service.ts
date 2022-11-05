import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RecettesService {

  public urlBase: string = 'http://localhost:8888/';
   


    constructor(public http: HttpClient) { }

    getRecettes(): Observable<any> {
        return this.http.get(this.urlBase+'recettes');
    }
     getRecettesParModeCuison(modeCuisson): Observable<any> {
        return this.http.get(this.urlBase+'recettes/modeCuisson/'+modeCuisson);
    }
    getRecettesParPseudo(pseudo):Observable<any>{
      return this.http.get(this.urlBase+'recettes/pseudo/'+pseudo);
    }
    getRecetteById(id):Observable<any>{
    return this.http.get<any>(this.urlBase+'recettes/id/'+id);
    }
    getRecettesByRecherche(filtre:any):Observable<any>{
          return this.http.get<any>(this.urlBase+'recettes/recherche/'+filtre);

    }


}
