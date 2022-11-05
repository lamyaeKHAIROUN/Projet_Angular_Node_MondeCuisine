import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Router} from '@angular/router';
import { AuthentificationService } from '../authentification.service'



@Component({
  selector: 'app-deco',
  templateUrl: './deco.component.html',
  styleUrls: ['./deco.component.css']
})
export class DecoComponent implements OnInit {
    public user:Observable<string>;
      public nom :string="";



  constructor( public authService: AuthentificationService, 
              public router : Router) 
  { 
     this.user=this.authService.getUser(); 
     this.user.subscribe(user => {
         this.nom = user
       });
  }

  ngOnInit(): void {
  }
 

}
