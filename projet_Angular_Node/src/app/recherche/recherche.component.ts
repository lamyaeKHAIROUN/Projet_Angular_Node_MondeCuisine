import { Component, OnInit } from '@angular/core';
import { RecettesService} from '../recettes.service';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  public filtre = {"filre":""};

    
   public resultat :String[]= new Array();
   public recettes:any;

  constructor(private route : ActivatedRoute,
              
              private recettesService: RecettesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=> {
      this.recettesService.getRecettesByRecherche(params.item).subscribe((r:any)=> {
        this.recettes=r;
      });
    });
  }
  onSubmit(){
     
 this.resultat=[];


  }
  sh(chaine){
    console.log(chaine);
  }
  chercher(p:any){
    console.log(p);
  }

}
