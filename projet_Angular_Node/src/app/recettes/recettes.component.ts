import { Component, OnInit , Input} from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecettesService } from '../recettes.service';
import { Observable } from 'rxjs';
import {CardeComponent} from 'src/app/carde/carde.component';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DiscussionService } from '../discussion.service';



const httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Methods": "GET,POST",   
    "Access-Control-Allow-Headers": "Content-type",  
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })
};
@Component({
  selector: 'app-recettes',

  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {

 @Input() recettes:any
  public user: Observable<string>;
  //public recettes: any;
  public uneRecette : any;
  public  filtre;
  public nvDiff :string="";
  public nom :string="";
  public modeCuisson: string="";
  public pseudo :string="";
  public ingredients:string="";
  public name:string="";


  constructor(public router:Router,
    public route: ActivatedRoute,
                public authService: AuthentificationService,
                public recettesService: RecettesService,
                public msg:DiscussionService
                ) {
      
      this.user = this.authService.getUser();

    }
   

  ngOnInit():void {
      this.route.params.subscribe((params :Params) => {
          this.recettesService.getRecettes().subscribe(recettes => {
             this.recettes = recettes;
         
    });
      });
    

    }
      
      /*this.msg.getMsg().subscribe((f:any)=>{
        //filtre=f;
        this.loadRecette(f);
      });*/

      /*this.route.params.subscribe((nom:Params)=>{
        this.recettesService.getRecettesByRecherche(nom).subscribe(recettes=>{
          this.recettes=recettes;
          this.loadRecette(nom);
        })
      })*/
      
    getKeys(recettes : any) : any {
      return Object.keys(recettes).slice(1,recettes.length);
    }
    
   
   showDetailles(recette:any){

    console.log("ans fct showDetails");
    console.dir(recette);
    this.router.navigateByUrl('recettes/'+recette.modeCuisson+'/recuperer');
  
   }
   loadRecette(f:any){
    this.recettesService.getRecettesByRecherche(f).subscribe((recette:any)=>{
      this.uneRecette=recette;
    });
   }
   applyFilter(){
    this.msg.envoyerMsg(this.modeCuisson);
  }
  Search(){
    if(this.modeCuisson=="")
    {
      this.ngOnInit();

    }else{
      this.recettes=this.recettes.filter(res=> {
      return res.modeCuisson.toLocaleLowerCase().match(this.modeCuisson.toLocaleLowerCase());
    });
  }
}
SearchNom(){
    if(this.nom=="")
    {
      this.ngOnInit();

    }else{
      this.recettes=this.recettes.filter(res=> {
      return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
    });
  }
}


SearchDiff(){
    if(this.nvDiff=="")
    {
      this.ngOnInit();

    }else{
      this.recettes=this.recettes.filter(res=> {
      return res.nvDiff.toLocaleLowerCase().match(this.nvDiff.toLocaleLowerCase());
    });
  }
}


SearchIngredient(){
    if(this.ingredients["nom"]=="")
    {
      this.ngOnInit();

    }else{
      this.recettes=this.recettes.filter(res=> {
      return res.ingredients["nom"].toLocaleLowerCase().match(this.ingredients["nom"].toLocaleLowerCase());
    });
  }
}


SearchPseudo(){
  if(this.pseudo=="")
    {
      this.ngOnInit();

    }else{
      this.recettes=this.recettes.filter(res=> {
      return res.pseudo.toLocaleLowerCase().match(this.pseudo.toLocaleLowerCase());
    });
  }
}
}

