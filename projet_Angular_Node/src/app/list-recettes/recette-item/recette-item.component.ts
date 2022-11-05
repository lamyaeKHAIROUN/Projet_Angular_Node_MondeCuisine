import { Component, OnInit ,Input} from '@angular/core';
import { RecettesService } from 'src/app/recettes.service';
import { CartService } from 'src/app/cart.service';
import {DiscussionService} from 'src/app/discussion.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import { AuthentificationService } from 'src/app/authentification.service';
import {CardeComponent} from 'src/app/carde/carde.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Methods": "GET,POST",   
    "Access-Control-Allow-Headers": "Content-type",  
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })
};

@Component({
  selector: 'app-recette-item',
  templateUrl: './recette-item.component.html',
  styleUrls: ['./recette-item.component.css']
})
export class RecetteItemComponent implements OnInit {

  @Input() recettesItem:any;
  public estConnecter: boolean=false;
  constructor(public msg:DiscussionService,
  
    public authService:AuthentificationService,
    public router:Router) { }

  ngOnInit(): void {
    this.authService.c2.subscribe(estConnecter=> this.estConnecter=estConnecter);
  }
  showDetailles(recettesItem:any){

    this.router.navigate(['/cardes/'+recettesItem._id]);
  
   }

  




}
