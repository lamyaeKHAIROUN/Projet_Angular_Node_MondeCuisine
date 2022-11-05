import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  public user = {"nom":"", "prenom": "", "email": "", "password" : ""}
  public message: string = "";
  public connexion = false;

  constructor(public authService: AuthentificationService, public router: Router) { }

  onSubmit(){
    this.connexion = false;
    if (Object.values(this.user).includes("")){
      this.message= "Erreur, tous les champs doivent etre remplis "
      return
    }
    let email = {"email": this.user["email"]};
    this.authService.verificationConnexion(email).subscribe((reponse : any) =>{
      console.log(this.message);
      if (reponse['resultat']){
        this.connexion = true;
        this.message = "Email déjà utilisé"
      }
      else {
        console.log("Email n'existe pas on peut pas créer");
        this.authService.ajouterUtilisateur(this.user).subscribe((reponse :any) => {
          this.message = reponse['message']
          console.log(reponse)
          if (reponse['resultat'] == 1){
            this.authService.connect(this.user["nom"])
              this.router.navigate(['/recettes'])
          

          }
        });



      }
      //setTimeout( () => {this.router.navigate(['/categories']);}, 1000);
    });
  }

  ngOnInit() : void{

  }


}