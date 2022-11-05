import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

    public urlBase: string = 'http://localhost:8888/';

    constructor(public http: HttpClient) { }

    getProduits(): Observable<any> {
        return this.http.get(this.urlBase+'produits');
    }

    getProduitsParCategorie(categorie): Observable<any> {
        return this.http.get(this.urlBase+'produits/categorie/'+categorie);
    }

    getCategories(): Observable<any> {
        return this.http.get(this.urlBase+'categories');
    }
}
