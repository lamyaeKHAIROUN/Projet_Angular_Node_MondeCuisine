import { Component, OnInit, Input } from '@angular/core';
import { AuthentificationService } from '../authentification.service'
import { Router} from '@angular/router';
import { Observable} from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { RecettesService } from '../recettes.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DiscussionService } from '../discussion.service';
import {ListRecettesComponent} from 'src/app/list-recettes/list-recettes.component';


const httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Methods": "GET,POST",   
    "Access-Control-Allow-Headers": "Content-type",  
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })
};
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public user:Observable<string>;
  public nom :string="";
  public estConnecter:boolean=false;
  public user1:string="";
  public nom2:any="";
  constructor(public route:ActivatedRoute,
              public authService: AuthentificationService, 
              public router : Router,
              public msg : DiscussionService,
              public recettesService: RecettesService) 
  { 
     this.user=this.authService.getUser(); 
     this.user.subscribe(user => {
         this.nom = user
       });
  }

  ngOnInit(){
    this.router.navigate(['/deco']);
    //this.authService.c2.subscribe.(estConnecter=>this.estConnecter=estConnecter);
  }
  
  deconnexion(){
    this.authService.disconnect();
    this.router.navigate(['/deco']);
  }
  

}
