import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecettesService } from '../recettes.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RecettesComponent} from "src/app/recettes/recettes.component"; 
import {Router} from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Methods": "GET,POST",   
    "Access-Control-Allow-Headers": "Content-type",  
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })
};

@Component({
  selector: 'app-carde',
  templateUrl: './carde.component.html',
  styleUrls: ['./carde.component.css']
})
export class CardeComponent implements OnInit {

   recettesItem:any;
   nom:any; 

  constructor(public router:Router,public route: ActivatedRoute, public recettesService: RecettesService) {}

    ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      //this.recettesItem=this.route.snapshot.params.nom;
      console.log("ici");
      console.log(params.recettesItem);
      console.log("hena");
      console.log(params._id);
      this.recettesService.getRecettesParModeCuison(params.modeCuisson).subscribe((recettes:any) => {
        console.dir(this.recettesItem);
        this.recettesItem = recettes; 
        console.log("henaya fin") ;
        console.dir(this.recettesItem); 

      });
    });
  }
  showDetailles(recette:any){

    console.log("ans fct showDetails");
    console.dir(recette);
  
   }
 }
