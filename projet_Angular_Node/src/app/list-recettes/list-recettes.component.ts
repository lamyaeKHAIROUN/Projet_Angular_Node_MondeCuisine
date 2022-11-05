import { Component, OnInit,Input} from '@angular/core';
import { RecettesService } from '../recettes.service';
import { DiscussionService} from '../discussion.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthentificationService } from '../authentification.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router} from '@angular/router';
import { Subscription} from 'rxjs';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Methods": "GET,POST",   
    "Access-Control-Allow-Headers": "Content-type",  
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })
};
@Component({
  selector: 'app-list-recettes',
  templateUrl: './list-recettes.component.html',
  styleUrls: ['./list-recettes.component.css']
})
export class ListRecettesComponent implements OnInit {

  recettes:any;
  

  constructor(public router:Router,
    public route: ActivatedRoute,
    public authService: AuthentificationService,
    public recettesService : RecettesService,public msg : DiscussionService) { 
//this.user = this.authService.getUser();
  }
 ngOnInit() {
      this.route.params.subscribe((params :Params) => {
          if (params["modeCuisson"] !== undefined) {
              this.recettesService.getRecettesParModeCuison(params["modeCuisson"]).subscribe(recettes => {
                  this.recettes = recettes;
        }
        );                     
          }
          else {

             this.recettesService.getRecettes().subscribe(recettes => {
             this.recettes = recettes;
       });
    }
      });

    }
    getKeys(recettes:any) : any {
      return Object.keys(recettes).slice(1,recettes.length);
    }

  chargerRecette(filtreP:any){
    this.recettesService.getRecettesByRecherche(filtreP).subscribe((recettes:any)=>{
      this.recettes=recettes;
    });

  }

}
