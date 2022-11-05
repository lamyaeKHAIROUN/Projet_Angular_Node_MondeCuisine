import { Component} from '@angular/core';
import { AuthentificationService } from '../authentification.service'
import { Router} from '@angular/router'
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
 
  public utilisateur= {"email": "","password":""}
  public message: string ="";
  constructor(public authService: AuthentificationService, public router : Router) {

  }

  onSubmit(){
    this.authService.verificationConnexion(this.utilisateur).subscribe(reponse => {
      this.message=reponse['message'];
      if(reponse['resultat']){
        this.authService.connect(this.utilisateur.email);
        this.router.navigate(['/recettes']);

      }
      //setTimeout( ()=>{this.router.navigate(['/user/connexion']);},1000);
    });
  }

}
